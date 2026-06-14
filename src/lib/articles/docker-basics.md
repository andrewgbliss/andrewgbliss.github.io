---
slug: "docker-basics"
date: "2019-02-15"
title: "Docker Basics"
tagline: ""
authorSlug: "andrew-bliss"
image: "https://storage.googleapis.com/blisscoder-0-public/blisscodedev/img/desk-top.webp"
published: true
tags: ["docker"]
---

## What is Docker?

Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package. By doing so, thanks to the container, the developer can rest assured that the application will run on any other Linux machine regardless of any customized settings that machine might have that could differ from the machine used for writing and testing the code.

Docker uses containers, which are built from images, to run your application. An Image bundles the operating system, environment, and any other applications needed to run your application.

For example the node image uses a Debian image, and pre install node libraries, so you can run a node application without installing Debian or node on your computer. You can then write a Docker file to extend that functionality and build your own application image.

## What is Docker Compose?

Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.

## Running Docker Compose

Using Compose is basically a three-step process:

Define your app’s environment with a Docker file so it can be reproduced anywhere.
Define the services that make up your app in docker-compose.yml so they can be run together in an isolated environment.
Run docker-compose up and Compose starts and runs your entire app.
A docker-compose.yml looks like this:

```yaml
version: ‘3’
services:
 web:
 build: .
 ports:
 — “5000:5000”
 volumes:
 — .:/code
 — logvolume01:/var/log
 links:
 — redis
 redis:
 image: redis
volumes:
 logvolume01: {}
```

## Docker Compose Commands

```bash
docker-compose up — this will start all of the docker containers


docker-compose stop — this will stop all of the docker containers

docker-compose down — this will stop and destroy all your containers, be careful of this, it will destroy all your volumes and data for the container. In order for your data to persist, create a volume.

docker-compose build — this will rebuild all the docker containers
```

## Troubleshooting building apps in docker

Example of a node service, in a docker container, steps to get back into a working condition.

```bash
docker-compose build — This will pull all the docker images needed to create your containers.
```

If you are attaching a volume for development make sure you install all your dependancies through the container and not the host machine. For instance, if you run npm install on your host machine, and you are running MacOSX, it will install pre built binaries for MacOSX. This is fine but if there are different binaries needed for Linux and you attach your volume into a Linux environment then it might cause an error. The solution would to run a command from within the container so it will build from within the environment and link back to your volume.

```bash
docker-compose run — rm {{container-name}} {{command}}

Commands:

npm i — this will install node_modules

/bin/bash — this will bring you to a terminal within the container
```

If you run into trouble you can remember to delete node_modules from the host machine and the container.

If you ever get into trouble with docker containers the best thing sometimes is to remove all your images and containers, update docker to the latest version, restart your computer, and begin from scratch.

```bash
#!/bin/bash
# Delete all containers
docker rm -f $(docker ps -a -q)
# Delete all images
docker rmi -f $(docker images -q)
```
