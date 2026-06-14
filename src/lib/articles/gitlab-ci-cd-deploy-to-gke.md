---
slug: "gitlab-ci-cd-deploy-to-gke"
date: "2019-07-08"
title: "Gitlab CI/CD Deploy to GKE"
tagline: ""
authorSlug: "andrew-bliss"
image: "https://storage.googleapis.com/blisscoder-0-public/blisscodedev/img/desk-top.webp"
published: true
tags: ["kubernetes", "docker", "gitlab", "gke"]
---

This is a guide to create a Google Kubernetes cluster and configure Gitlab CI / CD to deploy your app to the cluster.

This assumes that you have a paid or trial Google Cloud account.

## Creating a Kubernetes cluster

- Go to the Google Console.
- https://console.cloud.google.com/kubernetes
- Click “Create Cluster”.
- Fill in the name, description, location, zone. It’s a good idea to keep everything in the same location and zone so it can quickly communicate with other services from Google.
- Under the “Node Pools” section there will be a “More Options” button. Click it to configure your default pool. There will be an option for giving access levels to other Google services. You can give it full access or on a service by service basis. If you need your services to talk to a Cloud SQL database then enable the Cloud SQL service for example.
- Click the “Availability, networking, security, and additional features” link at the bottom of the page.
- Check the “Enable VPC-native (using alias IP)” checkbox. This will enable pods to connect to services without the need for a Kubernetes side car.
- Check the “Enable legacy authorization” checkbox. This will enable Gitlab to be able to deploy to Kubernetes.
- Click the “Create” button.
- Go into the cluster to view the basic information about Kubernetes.
- Copy the “Endpoint” IP address and save it to use to configure Gitlab.
- Click the “Show credentials” right next to the “Endpoint” IP address. This will give the CA certificate to use to configure Gitlab.

## Creating a secret key in Kubernetes

- Go to the Google Console.
- https://console.cloud.google.com/kubernetes
- Click “Connect” on the cluster.
- Click “Run in Cloud Shell”. This will create an in browser shell for you to run commands for the cluster.

```bash
# Create the Gitlab Deploy Key
kubectl create serviceaccount gitlab-deploys

# Create the Gitlab Deploy Binding
kubectl create clusterrolebinding gitlab-deploy-binding --clusterrole=cluster-admin --user=gitlab-deploys

# Describe the Service Account. This will reveal the name of the secret
kubectl describe serviceaccount gitlab-deploys

# Copy the output of the token. We will enter this in Gitlab
kubectl describe secret {secret-name}
```

## Configuring Gitlab

- Open up your gitlab group
- https://gitlab.com/{{group}}
- Click the left side “Kubernetes” navigation link
- Click the “Add Kubernetes Cluster” button
- You can either connect an already existing cluster, or create a new one right from Gitlab. We will add an existing cluster.
- Click “Add existing cluster”.
- Give it your Kubernetes cluster name.
- The API URL is the “Endpoint” IP address of the Kubernetes cluster
- The CA Certificate is the one found under “Show Credentials” in the Kubernetes cluster information. Make sure it is formatted correctly. Sometimes copying it straight from the Kubernetes cluster will not correctly format it.
- The Service Token is the secret key we created in the Kubernetes cluster. Copy it from the Cloud Shell into this field.
- Leave the rest checked if you want Gitlab to manage your Kubernetes cluster for you, which we don’t. If you just want to deploy then uncheck the rest of the checkboxes.
- Create a Gitlab deployment repo

We will now create a docker image that will run a script that will deploy the application to the Kubernetes cluster.

- Create a repo in your group called “kubernetes-deploy”.
- Create a Dockerfile.
  -Create a folder called scripts, and a file called deploy.sh under that folder.
- Create a .gitlab-ci.yml file.

## Dockerfile

```dockerfile
FROM alpine

RUN apk --no-cache add bash curl && \
    curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl && \
    chmod +x ./kubectl && \
    mv ./kubectl /usr/local/bin/kubectl

COPY scripts /scripts
CMD ["bash"]
```

## deploy.sh

```bash
#!/usr/bin/env bash
set -e

mkdir -p ~/.kube
cp $KUBECONFIG ~/.kube/config

sed -i -e "s/{{image}}/$CI_COMMIT_SHA/g" kube-deployment.yaml

kubectl apply -f kube-deployment.yaml
```

Don’t forget to give this file execution permissions.

```bash
sudo chmod a+x deploy.sh
```

## .gitlab-ci-yml

```yaml
image: docker:git

services:
  - docker:dind

stages:
  - build
  - release

variables:
GITLAB_GROUP: example
GITLAB_CONTAINER_TEST_IMAGE: registry.gitlab.com/$GITLAB_GROUP/kubernetes-deploy:$CI_COMMIT_SHA
  GITLAB_CONTAINER_RELEASE_IMAGE: registry.gitlab.com/$GITLAB_GROUP/kubernetes-deploy:latest

before_script:
  - docker login -u gitlab-ci-token -p $CI_BUILD_TOKEN registry.gitlab.com

build:
  stage: build
  script:
    - docker build -t $GITLAB_CONTAINER_TEST_IMAGE .
    - docker push $GITLAB_CONTAINER_TEST_IMAGE

release:
  stage: release
  script:
    - docker pull $GITLAB_CONTAINER_TEST_IMAGE
    - docker tag $GITLAB_CONTAINER_TEST_IMAGE $GITLAB_CONTAINER_RELEASE_IMAGE
    - docker push $GITLAB_CONTAINER_RELEASE_IMAGE
  only:
    - master
```

Push this to your master branch and let the pipeline build the docker image for you. This is important as we will be using this docker image to build from any repo that we want to deploy to Kubernetes.

Now in the Gitlab repo you want to deploy to Kubernetes, create a .gitlab-ci.yml. This will use the kubernetes-deploy docker image to deploy to Kubernetes. Don’t forget to change your group and repo name.

```yaml
image: docker:git

stages:
  - build
  - test
  - release
  - deploy

services:
  - docker:dind

variables:
  GITLAB_GROUP: example
  GITLAB_REPO: api
  GITLAB_KUBERNETES_DEPLOY_IMAGE: registry.gitlab.com/$GITLAB_GROUP/kubernetes-deploy:latest
  GITLAB_CONTAINER_TEST_IMAGE: registry.gitlab.com/$GITLAB_GROUP/$GITLAB_REPO:$CI_COMMIT_SHA
  GITLAB_CONTAINER_RELEASE_IMAGE: registry.gitlab.com/$GITLAB_GROUP/$GITLAB_REPO:latest

build:
  stage: build
  before_script:
    - docker login -u gitlab-ci-token -p $CI_BUILD_TOKEN registry.gitlab.com
  script:
    - docker build -t $GITLAB_CONTAINER_TEST_IMAGE .
    - docker push $GITLAB_CONTAINER_TEST_IMAGE

lint:
  image: $GITLAB_CONTAINER_TEST_IMAGE
  stage: test
  script:
    - echo "Run your lint or tests here"

test:
  image: $GITLAB_CONTAINER_TEST_IMAGE
  stage: test
  script:
    - echo "run your tests here"

release:
  stage: release
  before_script:
    - docker login -u gitlab-ci-token -p $CI_BUILD_TOKEN registry.gitlab.com
  script:
    - docker pull $GITLAB_CONTAINER_TEST_IMAGE
    - docker tag $GITLAB_CONTAINER_TEST_IMAGE $GITLAB_CONTAINER_RELEASE_IMAGE
    - docker push $GITLAB_CONTAINER_RELEASE_IMAGE
  only:
    - master

.deploy: &deploy
  image: $GITLAB_KUBERNETES_DEPLOY_IMAGE
  script:
    - /scripts/deploy.sh
  only:
    - master
  allow_failure: false

deploy:
  <<: *deploy
  stage: deploy
  when: manual
```

The deploy script expects a file named “kube-deployment.yaml” is present in the root of your repo. This is the Kubernetes definition file that will create a deployment for you in Kubernetes. Again don’t forget to change the name of the docker image to your group and repo name.

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  labels:
    app: api
  name: api
spec:
  replicas: 1
  selector:
    matchLabels:
      app: api
  strategy:
    rollingUpdate:
      maxSurge: 0
      maxUnavailable: 1
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: api
    spec:
      containers:
        - image: registry.gitlab.com/example/api:{{image}}
          imagePullPolicy: Always
          name: api
          ports:
            - containerPort: 3000
              protocol: TCP
          resources:
            requests:
              cpu: 200m
          env:
            - name: NODE_ENV
              valueFrom:
                secretKeyRef:
                  name: api-env-secrets
                  key: NODE_ENV
      restartPolicy: Always
      terminationGracePeriodSeconds: 30
```

---

```yaml
apiVersion: autoscaling/v1
kind: HorizontalPodAutoscaler
metadata:
  name: api
spec:
  scaleTargetRef:
    apiVersion: apps/v1beta1
    kind: Deployment
    name: api
  minReplicas: 2
  maxReplicas: 4
  targetCPUUtilizationPercentage: 50
```

This deployment file assumes you have created a secrets file named “api-env-secrets”.

To create this, first start out by creating an .env file

```
NODE_ENV=production

# Anything else you need. Database credentials, etc.
```

Then run the following command on the Cloud Shell command line.

```bash
kubectl create secret generic api-env-secrets --from-env-file=.env
```

Now you can push your code in your repo to the master branch in Gitlab and press the manual play button in the Gitlab CI / CD pipelines section to see it deploy to Kubernetes.

If everything was a success you should see your Kubernetes pods created.

```bash
kubectl get pods
```

Now we need to create a Kubernetes deployment with an exposed port that our application will be running on.

```bash
kubectl expose deployment api --target-port=3000 --type=NodePort
```

You can confirm it was created successfully by running.

```bash
kubectl get services
```

You will need to create an ingress load balancer to direct traffic to your application.

```yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: api-ingress
  namespace: development
spec:
  backend:
    serviceName: api
    servicePort: 3000
```

Then run this command to create the ingress.

```bash
kubectl apply -f ingress.yaml
```

You can confirm that it was created by running.

```bash
kubectl get ingress
```

This command will show you the IP address of the ingress. You will need to go into Google Cloud in order to setup SSL certificates and configure your ingress to use a static IP, but for now you should have everything setup in order to have the Gitlab CI / CD deploy your app to Kubernetes.

You can also modify the deployments to have Kubernetes namespaces. This will allow you to create a development and production environment if needed.
