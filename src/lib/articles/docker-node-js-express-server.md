---
slug: "docker-node-js-express-server"
date: "2018-07-18"
title: "Docker Node.js Express Server"
tagline: "In this article we will go over how to create a Node.js Express server with Docker."
authorSlug: "andrew-bliss"
image: "https://storage.googleapis.com/blisscoder-0-public/blisscodedev/img/desk-top.webp"
published: true
tags: ["node", "express", "docker"]
---

Setting up a Node.js Express server to use within Docker is useful. Docker will be helpful to quickly mock up some api endpoints and keep environments simple.

In the next article we will go through what it will take to deploy this Docker container to Heroku with Gitlab.

## Creating our working directory

Let’s create a directory we can work out of. In this directory we will have all our files to run a Node.js Express server, and a Docker container.

In the next article we will set up this directory to use version control with Gitlab.

```bash
mkdir my-app
cd my-app
```

## Creating a Node.js Express server

Let’s start building our Express server. If you don’t know what Node.js or Express is then I suggest you research those technologies. This article assumes you know the basics of Javascript, Node.js, and Express.

Create the package.json file:

```bash
npm init
```

Running this command will ask you some questions about how to set up your Node package. Give it the name my-app and accept the default parameters.

Now we will install a npm package to help us set up the Express server. If you need more control over Express I suggest you use the Express package right out of the box.

```bash
npm install --save boilerpress
```

Let’s create some run scripts we can use to start the server. Add this to your package.json file.

```json
"scripts": {
  "start": "node /usr/src/app/index.js"
}
```

Create an index.js file:

```js
const { app, start } = require("boilerpress");
const os = require("os");
// Add any middleware you need
app.use((req, res, next) => {
  res.locals = {
    host: os.hostname(),
    title: "Express",
  };
  next();
});
app.use((req, res) => {
  res.send("Hello World!");
});
// Start the Express server
start();
```

When we run npm start it will start the server we defined in the index.jsfile. Using the package boilerpress it will help us quickly mock up a server.

## Creating the Docker image

Create a file named Dockerfile:

```dockerfile
FROM node
RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm i
CMD npm start
```

This is the a simple Dockerfile. You will probably want to set a specific version of the node image to build from and set up a user, but this will work for a quick mock up.

This will copy over the entire working directory to inside the docker image at /usr/src/app.

Create a docker-compose.yml file:

```yaml
version: "3"
services:
  boilerpress:
    build: .
    ports:
      - "3000:3000"
    env_file:
      - .env
```

Let’s set up an .env file that we can use to have environment variables inside our docker image.

Create a .env file:

```
NODE_ENV=development
PORT=3000
```

Now we can run docker commands to build our image and run the container:

```bash
docker-compose build
docker-compose up
```

## Testing the running server

Navigate with your browser to:

```
localhost:3000
```

You will see the words Hello World!

In the next article we will build upon this example, set up some more api endpoints and go through what it will take to deploy this Docker server to Heroku with Gitlab.
