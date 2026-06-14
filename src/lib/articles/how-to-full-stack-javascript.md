---
slug: "how-to-full-stack-javascript"
date: "2020-07-15"
title: "How to Full Stack JavaScript"
tagline: "In this article we will go over how to create a full stack JavaScript application."
authorSlug: "andrew-bliss"
image: "https://storage.googleapis.com/blisscoder-0-public/blisscodedev/img/laptop2.webp"
published: true
tags: ["javascript", "full stack", "nodejs"]
---

JavaScript enables browsers on desktops and mobile devices to interactively engage with websites. The eco system of packages and frameworks enables developers to write code to better help developers. In recent years it has become popular to use JavaScript in places other than browsers.

JavaScript has become the language of the internet. Anyone that has an idea, can quickly create, build, and deploy Full Stack applications by using JavaScript.

Full Stack means that we are creating, building, and deploying, services on the browser, such as Chrome or Safari, and host back end servers that connect to database and process events.

## Front End

- The look and feel of the application.
- How it will interact with users
- Provide a service.

## Back End

- The server Api
- Storage of data.
- How it will authenticate users and secure people’s data.
- Sending data to the Front End to be displayed.
  So now we have defined our terms, let’s build a starter project that can get us building in no time.

In this tutorial we will setup a mono repo that uses Docker to configure a development environment so we can start creating, building, and deploying our app.

Let’s talk about the structure of the repo, what services we will use, and what folders and files need to be created.

- Api — This folder contains a NodeJs project that will run an ExpressJs server. Connect to a database, and create an Api for us to use on the Front End.
- Client — This folder contains a ReactJs project that will be used for the Front End.
- Db — This folder contains development scripts for Docker to use to connect to a local database.
- Nginx — This folder contains the load balancer Nginx so we can develop off of localhost for all of our services.

We can technically setup any service we want here. Create a folder for it and add it to the docker-compose.yml

Now let’s discuss our services in our docker-compose.yml.

```yaml
version: "3"
services:
  client:
    build: .
    depends_on:
      - db
      - api
    env_file:
      - .env
    environment:
      - PORT=3000
    ports:
      - "3000:3000"
   stdin_open: true
   tty: true
   volumes:
     - .:/usr/src/app:cached
   command: ["npm", "run", "client:start"]
```

In this docker-compose.yml file we will define all of our services so we can develop locally on our machine. Since this is a mono repo and one Dockerfile, we will build from the current directory and put the whole repo into a Docker container to serve our Full Stack app. You can see the rest of file in the repo for all the other services.

Let’s keep our Docker container to a minimum and not include certain files to be built into our image. We do this by using a .dockerignore file.

```
.git
Dockerfile
docker-compose.yml
.DS_Store
.gitignore
README.md
env.*
sample.env
.env
nginx
db
# To prevent storing dev/temporary container data
*.csv
tmp
```

Any files you don’t need in the container then list them here to ignore them.

Now that we have gone over the folders and setup, let’s create an .env file to use for all our environment variables.

```
# Environment
NODE_ENV=local
TZ=America/Denver
PORT=3000
# Auth
JWT_SECRET=ta8fbfdaf2a7869903a644d2827c888b81461a47dd5ab6b6014473eb83c7d4a1X_
SERVICE_TOKEN=ta8fbfdaf2a7869903a644d2827c888b81461a47dd5ab6b6014473eb83c7d4a1
# DB
DATABASE_URL=postgres://postgres:postgres@db:5432/postgres
```

In our Api service we will be using a JWT (JSON Web Token) for authenticating, so we will make an environment variable to store our secret. We will also store our local database credentials here.

Now we can run docker-compose up, build our containers and the app should be up and running on localhost.

```
docker-compose up
```

Compiling and running our app is all controlled by one package.json in the root folder of the project. It can run all the deploy scripts through running npm commands. In the README.md it shows how to run migrations and seeds.

```
docker-compose run --rm api npm run migrate
docker-compose run --rm api npm run seed
```

Let’s talk about what commands we have setup.

```
start — This will start the api after it has built
api:build — This will compile the app from Typescript into deployable JavaScript
api:dev — This will start a development server running and watching Typescript files
api:test — This will run tests on our api
api:db-utils — This will run database scripts
api:sequelize — This gives us access to the Sequelize CLI
client:start — This will start the React app development server
client:build — This will build the React app to get ready for deploying
client:copy — This will copy the client into the api to server static files
build — This will build and compile all the services
test — This will test all the services
migrate — This will run database migrations
seed — This will seed the database with data
heroku-postbuild — This will build all our services for Heroku
```

You can see in the docker-compose.yml what npm commands it is using for the local development services.

Now that we are setup locally let’s talk about deploying. In this tutorial we are going to be using Heroku and Github. We will host our repo in Github and create a project in Heroku that will connect to it.

Let’s setup a Procfile that will run any migrations when we push new code.

```
release: npm run migrate
```

When Heroku sees this file and releases new code it will now run migrations.

Let’s also add some ignore scripts for Heroku. We do this by creating a .slugignore file.

```
./db
./nginx
.dockerignore
docker-compose.yml
Dockerfile
.env
sample.env
README.md
log
tmp
```

Anything you don’t want to be in the final build in the Heroku service goes here in this file.

## Api Server

This Api will be running ExpressJs, and we will be using a JWT for authentication.

```
/**
 * JWT Authentication
 */
app.use(
  expressjwt({
    algorithms: ['HS256'],
    secret: process.env.JWT_SECRET,
    credentialsRequired: false,
    getToken(req) {
      if (req.headers.authorization &&       req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
      } else if (req.query && req.query.token) {
        return req.query.token;
      }
      return null;
    },
  })
);
```

This will take our JWT_SECRET environment variable and setup our authenticate. It will then look for the token in the headers or query string.

Then let’s start our server up listening on our PORT environment variable.

```
const server = app.listen(process.env.PORT, () => {
  console.log(
    `
     Express Server started.
     Port: ${app.get('port')}
    `
  );
});
```

Let’s setup a login route so users can login.

```
import express, { Request, Response, NextFunction } from 'express';
import { asyncEndpoint, validateSchema } from '../../../../../../middleware';
import joi from '@hapi/joi';
const router = express.Router();
const loginSchema = {
  path: 'body',
  schema: joi.object().keys({
    email: joi.string().required(),
    password: joi.string().required(),
  }),
};
const login = async (req: Request, res: Response, next: NextFunction) => {
  const { Users } = req.app.get('db');
  const user = await Users.findOne({
    attributes: ['id', 'accountId', 'email', 'password'],
    where: {
      email: req.body.email,
    },
  });
  if (!user || !user.verifyPassword(req.body.password)) {
    throw {
      status: 403,
      message: 'Email or Password is incorrect',
    };
  }

  req.refreshJWT(user.id, user.accountId);
  res.end();
};
router.post('/', validateSchema(loginSchema), asyncEndpoint(login));
export default router;
```

In this file we will bring in some data validation from the @hapi/joi package. We will validate to only allow input of an email and password. Then we will check the database and password to see if there are correct.

Now that we have our endpoint to login to the system we can write a login component in React.

```
import React, { useState } from 'react';
import { useObserver } from 'mobx-react-lite';
import { useAuth } from '../store/Context';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useSnackbar from 'hooks/useSnackbar';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import Api from 'services/Api';
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
const Login: React.FC = () => {
  const auth: any = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleClose = () => {
    auth.setOpenLoginDialog(false);
  };
  const handleRegister = () => {
    auth.setOpenLoginDialog(false);
    auth.setOpenRegisterDialog(true);
  };
  const handleForgotPassword = () => {
    auth.setOpenLoginDialog(false);
    auth.setOpenRegisterDialog(false);
    auth.setOpenForgotPasswordDialog(true);
  };
  const handleSubmit = useSnackbar(async (snackbar: any) => {
    await Api.post('/api/v1/login', {
      email,
      password,
    });
    window.location.href = '/dashboard';
  });
  return useObserver(() => {
    return (
      <Dialog
        open={auth.openLoginDialog}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="login"
      >
        <DialogTitle id="login">Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To login to this website, please enter your email address and
              password here.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}         />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}          />
         </DialogContent>
       <DialogActions>
         <Button onClick={handleClose} color="secondary">            Cancel
         </Button>
         <Button onClick={handleForgotPassword} color="primary">            Forgot Password
         </Button>
         <Button onClick={handleRegister} color="primary">            Register
         </Button>
         <Button
           onClick={handleSubmit}
           color="primary"
           disabled={!email || !password}
         >
           Login
         </Button>
       </DialogActions>
     </Dialog>
   );
  });
};
export default Login;
```

This component uses a Mobx store to handle state of the email and password. When the user clicks the Login button it will fire off the handleSubmit function and calls our backend Api.

## Developers note

There are some other components in the app that are just some basic forms for subscribing to a beta access email list.

You can develop any app you want to in this mono repo. You can run anything for a backend api. Just replace whats in the api and client folder and you can fit your needs.

Leave a comment about this has helped you or how you have solved deploying a mono repo using Full Stack JavaScript.
