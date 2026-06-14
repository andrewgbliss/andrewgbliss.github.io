---
slug: "creating-a-dynamic-restful-api-using-express-and-sequelize"
date: "2024-11-22"
title: "Creating a Dynamic RESTful API Using Express and Sequelize"
tagline: "What an API is, what it means to be RESTful, and how to implement these using Node.js."
authorSlug: "andrew-bliss"
image: "https://storage.googleapis.com/blisscoder-0-public/blisscodedev/img/desk-top.webp"
published: true
tags: ["express", "sequelize", "api", "node"]
---

## Introduction

In this article we will discuss what an API is, what it means to be RESTful, and how to implement these using Node.js. The Node.js packages we will be using will be Express for our API endpoints and Sequelize to query our database.

Learning how to create an API is a delicate process. Developers just want to build endpoints fast, so they can quickly get something ready for a webpage to consume. However, learning how to make things RESTful will make your API more consistent, predictable, and scalable.

This article is assuming you know how to create an Express server and connect to a database with Sequelize.

## Terminology

Let’s define what it means to build a RESTful API.

Creating an API (Application Programming Interface) is how we can setup logical actions to perform certain functions in our application. For example, we can setup a function called Create Customer and that will provide us an interface, so we don’t have to understand how it will actually create the customer, all we need to know is how to call the function. It’s then up to the programmer to implement the requirements for the API.

Creating a RESTful (REpresentation State Transfer) API means we will follow a pattern of how to logically setup endpoints by using HTTP methods. For example, when you type in your browser to go to a webpage it will call the HTTP GET method to retrieve the webpage for display. We will discuss later all the methods we need to know to create our RESTful API.

## Getting Started

Before we start, let’s plan out what is required in order to build our API. For example, let’s say we have a React application that has a customer page. On this page the user can create, show all, update, and delete customers. The React application will then make API calls to our Express server, and in turn the API will perform the action on our database. We will also need to prefix our API endpoints with a version number (This is useful if you need to build more APIs but need to maintain older versions).

## RESTful Endpoints

### GET /api/v1/customers

This will return an array of customers in our database.

### GET /api/v1/customers/:id

This will return one customer specified by the :id parameter.

### POST /api/v1/customers

This will create a customer in our database.

### PUT /api/v1/customers/:id

This will update a customer specified by the :id parameter.

### DELETE /api/v1/customers/:id

This will delete a customer specified by the :id parameter.

For more information on HTTP methods, visit [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

The above link goes over what each HTTP method is and what its intention is. Let’s quickly go over what HTTP methods we will be using.

- GET: This HTTP method will return a resource located on a server.

- POST: This HTTP method will create a resource.

- PUT: This HTTP method will update a resource.

- DELETE: This HTTP method will delete a resource.

Following the HTTP methods and their purpose, means we can start building a RESTful API that is predictable. However we don’t want to write brand new routers every time we create a new database resource. Let’s write some code that will do all the heavy lifting for us.

Express Router
Creating an Express router is straightforward and unopinionated, so we want to keep that flexibility, but at the same we don’t want to keep writing the same type of router over and over again.

So let’s look at a router we can write to create this RESTful API for our customers.

```javascript
import express, { Request, Response } from "express";
import db from "../../db";
const model = db.Customers;
const router = express.Router();
const getCustomers = async (req: Request, res: Response) => {
  const results = await model.findAll();
  res.json(results);
};
const getCustomer = async (req: Request, res: Response) => {
  const results = await model.findByPk(req.params.id);
  res.json(results);
};
const createCustomer = async (req: Request, res: Response) => {
  const results = await model.create(req.body);
  res.json(results);
};
const updateCustomer = async (req: Request, res: Response) => {
  const results = await model.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.json(results);
};
const deleteCustomer = async (req: Request, res: Response) => {
  const results = await model.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(results);
};
router.get("/", getCustomers);
router.get(`/:id`, getCustomer);
router.post("/", createCustomer);
router.put(`/:id`, updateCustomer);
router.delete(`/:id`, deleteCustomer);
export default router;
```

There is nothing wrong with this approach, you can have full flexibility if you need to do extra things like send emails, or make other api calls. However, you can see from this example, that it is pretty much a boilerplate router that you can copy and paste into another router and just change the name of customer to whatever the name of the other resource is.

So let’s make a middleware that can do all this heavy lifting for us.

First let’s create some helper middleware to help with async /await functions and returning our calls in a JSON format.

## Helper Middleware

```javascript
const asyncEndpoint = (endpoint) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await endpoint(req, res, next);
    } catch (e) {
      next(e);
    }
  };
};
```

This will enable a route to be wrapped in an async / await function and if any error happens we can catch it and send it through to the next Express function.

```javascript
const toJson = (req: Request, res: Response) => {
  res.status(200).json(req.results);
};
```

This will be placed at the end of each route and if the route is successful it will return the response as JSON.

```javascript
import asyncEndpoint from "./asyncEndpoint";
export const validateSchema = (...schemas) => {
  return asyncEndpoint(async (req, res, next) => {
    for (let schemaItem of schemas) {
      const { schema, path } = schemaItem;
      let validation = schema.validate(req[path], {
        abortEarly: false,
      });
      if (validation.error) {
        let messages = validation.error.details.map((i) => i.message);
        let errMessage = `Validation errors: ${messages.join(", ")}`;
        throw {
          status: 400,
          message: errMessage,
        };
      }
    }
    next();
  });
};
```

This will be our validation middleware that will use the hapi / joi package.

```javascript
export const withSequelize = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const db = req.app.get("db");
  const { Sequelize } = db;
  const {
    page = 0,
    limit = 100,
    order = "",
    attributes = ["id"],
    include,
  }: any = req.query;
  let options: SequelizeOptions = {
    offset: page === 0 ? 0 : parseInt(page) * parseInt(limit),
    limit: parseInt(limit),
  };
  let conditions = {};
  if (order && isString(order)) {
    const [column, direction = "ASC"] = order.split(",");
    options.order = [[Sequelize.col(column), direction]];
  } else if (order && isArray(order)) {
    options.order = order.map((orderGroup = "") => {
      const [column, direction = "ASC"] = orderGroup.split(",");
      return [Sequelize.col(column), direction];
    });
  }
  if (attributes && isString(attributes)) {
    options.attributes = attributes.split(",");
  } else if (attributes && isArray(attributes)) {
    options.attributes = attributes;
  }
  if (attributes && isString(attributes)) {
    options.attributes = attributes.split(",");
  } else if (attributes && isArray(attributes)) {
    options.attributes = attributes;
  }
  if (include && isArray(include)) {
    options.include = include.map((includeModel) => {
      const { model, as, attributes, ...rest }: any = qs.parse(
        includeModel,
        ";",
        "="
      );
      const include: Include = {
        model: db[model],
      };
      if (as) {
        include.as = as;
      }
      if (attributes) {
        include.attributes = attributes.split(",");
      }
      const otherColumns = omit(rest, [
        "page",
        "limit",
        "order",
        "attributes",
        "include",
      ]);
      if (otherColumns) {
        include.where = otherColumns;
      }
      return include;
    });
  }
  const otherColumns = omit(req.query, [
    "page",
    "limit",
    "order",
    "attributes",
    "include",
  ]);
  if (otherColumns) {
    conditions = {
      where: otherColumns,
    };
  }
  req.sequelize = {
    options,
    conditions,
  };
  return next();
};
```

If there is any middleware you should put into your arsenal it would be this. You can setup any read route to have pagination, conditions, and select only the attributes you need instead of the whole resource.

There are some Typescript interfaces you can view in the Github repo that I linked above. This article is already getting too long.

## Creating a resource

```javascript
export const create = (props) => {
  const route = async (req: Request, res: Response, next: NextFunction) => {
    const db = req.app.get("db");
    const model = db[props.model];
    if (!model) {
      throw {
        status: 404,
        message: "Model not found",
      };
    }
    const results = await model.create(req.body);
    req.results = results;
    next();
  };
  return [asyncEndpoint(route), toJson];
};
```

This middleware will take in a properties object with the model name. It will then look up the model from our db (database) object. If you haven’t setup the model correctly it will throw an error. Otherwise it will perform the same operation as the route in the plain router.

## Reading a resource

```javascript
export const read = (props) => {
  const route = async (req: Request, res: Response, next: NextFunction) => {
    const db = req.app.get("db");
    const model = db[props.model];
    if (!model) {
      throw {
        status: 404,
        message: "Model not found",
      };
    }
    let results = await model.findAll({
      ...req.sequelize.conditions,
      ...req.sequelize.options,
    });
    req.results = results;
    next();
  };
  return [withSequelize, asyncEndpoint(route), toJson];
};
```

This has the same functionality as the create function, except since we are reading from the database we can use the withSequelize middleware to help control pagination and conditions.

For example, if we run this API call:

http://localhost:3000/api/v1/customers?attributes=id,first_name&first_name=John

The API will only return the customer with the first name of John.

## Finding One Resource By Id

```javascript
export const findByPk = (props) => {
  const { id } = props;
  const route = async (req: Request, res: Response, next: NextFunction) => {
    const db = req.app.get("db");
    const model = db[props.model];
    if (!model) {
      throw {
        status: 404,
        message: "Model not found",
      };
    }
    const results = await model.findByPk(req.params[id], {
      ...req.sequelize.conditions,
      ...req.sequelize.options,
    });
    req.results = results;
    next();
  };
  return [withSequelize, asyncEndpoint(route), toJson];
};
```

This is similar to the read middleware except it will only find one record and return an object, not an array of objects.

## Updating a resource

```javascript
export const update = (props) => {
  const { key, path, fields } = props;
  const route = async (req: Request, res: Response, next: NextFunction) => {
    const db = req.app.get("db");
    const model = db[props.model];
    if (!model) {
      throw {
        status: 404,
        message: "Model not found",
      };
    }
    const results = await model.update(req.body, {
      where: {
        [key]: get(req, path),
      },
      fields,
    });
    req.results = results;
    next();
  };
  return [asyncEndpoint(route), toJson];
};
```

You can start to see we are building generic versions of the same functions from the plain router above. You can use any of these in your router, or one of them. If you don’t need to do anything special, these middleware will greatly speed up your time building an API.

## Deleting a resource

```javascript
export const destroy = (props) => {
  const { key, path } = props;
  const route = async (req: Request, res: Response, next: NextFunction) => {
    const db = req.app.get("db");
    const model = db[props.model];
    if (!model) {
      throw {
        status: 404,
        message: "Model not found",
      };
    }
    const results = await model.destroy({
      where: {
        [key]: get(req, path),
      },
    });
    req.results = results;
    next();
  };
  return [asyncEndpoint(route), toJson];
};
```

Now that we have some middleware, that can build RESTful API routes for us, let’s end by creating a Sequelize router that can take in all these middleware and build a dynamic API for us.

## Sequelize Router

```javascript
import express from "express";
import { validateSchema } from "./validateSchema";
import { create, read, findByPk, update, destroy } from "./sequelize";
const sequelizeRouter = (props) => {
  const { model, key = "id", schemas } = props;
  const router = express.Router();

  router.get("/", read({ model }));
  router.get(`/:${model}Id`, findByPk({ model, id: `${model}Id` }));
  router.post("/", validateSchema(schemas.create), create({ model }));
  router.put(
    `/:${model}Id`,
    validateSchema(schemas.update),
    update({
      model,
      key,
      path: `params.${model}Id`,
    })
  );
  router.delete(
    `/:${model}Id`,
    destroy({
      model,
      key,
      path: `params.${model}Id`,
    })
  );
  return router;
};
export default sequelizeRouter;
```

Now we have this final middleware we can rewrite our plain customers router like this:

```javascript
import joi from "@hapi/joi";
import sequelizeRouter from "../../../../../middleware/sequelizeRouter";
const createSchema = {
  path: "body",
  schema: joi.object().keys({
    first_name: joi.string().required(),
    last_name: joi.string().required(),
  }),
};
const updateSchema = {
  path: "body",
  schema: joi.object().keys({
    first_name: joi.string().required(),
    last_name: joi.string().required(),
  }),
};
const router = sequelizeRouter({
  model: "Customers",
  schemas: { create: createSchema, update: updateSchema },
});
export default router;
```

You can now see that we can do all the heavy lifting through our middleware, the only thing we need to care about now is the schema allowing for creating and updating, and the name of the model. If you don’t care about schema validation then all you need is:

```javascript
const router = sequelizeRouter({
  model: "Customers",
});
```

So by just passing the model name we can build an entire RESTful API in a few lines of code.

If you do need to do anything more robust or flexible you can easily break away from the functions and do you own thing. However by keeping the API predictable, consistent, and scalable, you can build more on top of this, such as adding caching and event handling.

## Conclusion

Writing code that does all the heavy lifting is beneficial when you use the same patterns over and over again. Creating dynamic middleware to generate code for you makes it so easy to implement new features across your API. We created each middleware to handle the HTTP methods and built out an Express router for us.

Let me know what you think of this approach. Do you like hand coding plain routers all the time? Are there different ways of doing the heavy lifting that you have come across?
