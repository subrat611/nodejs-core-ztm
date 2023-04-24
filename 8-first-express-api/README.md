![image](https://user-images.githubusercontent.com/77252075/230598333-92ea4442-c24a-40f5-8d29-3aa874794a4f.png)

## Table of contents

- [Why Express](#why-express)
  - [Setup a simple server](#setup-a-simple-server)
  - [Defining Routes](#defining-routes)
- [Route parameters](#route-parameters)
- [Development Dependencies](#development-dependencies)
- [Middleware](#middleware)
- [Model View Controller (MVC)](#model-view-controller-mvc)
- [Model View Controller in Express](#model-view-controller-in-express)
- [Express Routers](#express-routers)

---

# Why Express

1. Express js is a framwork build on top of node js, which provide minimum setup to create and run a web server.
2. Express lets you build single page, multi page and hybrid web and mobile applications.
3. Express comes with a default template engine.
4. Express support MVC (Model-View-Controller) architecture to design web application.

[🔼 Back to top](#table-of-contents)

## Setup a simple server

- Install the express package📦

```bash
npm install express
```

- Create an `index.js` file and write some basic code

```javascript
// import the express package
const express = require("express");

const PORT = 3000;

// create an instance of the express.js and
// assign to app variable
const app = express();

// it tells that where the server is running
app.listen(PORT, () => console.log(`server start in port ${PORT}`));
```

- Update some config in `package.json` file

```json
"scripts": {
    "start": "node index.js"
  },
```

- Run the server

```bash
npm start
```

- Go to the route `localhost:3000` inside your browser

```
you will get "Cannot GET /"
```

- Or you can change the name of `index.js` file to `server.js` and directly run `npm start` without setting config of `package.json`

[🔼 Back to top](#table-of-contents)

## Defining Routes

- To define a route handle you have to do this

```javascript
// app.<methodName>(route: string, callbackfn/routehandler)
app.get("/", (req, res) => res.send("Hello world"));
app.get("/home", (req, res) => res.send("<h1>Home Page</h1>"));
app.get("/api", (req, res) =>
  res.send({
    api: "key",
  })
);
```

- Express handle all the response headers `Content-Type` by own.
- ![image](https://user-images.githubusercontent.com/77252075/230498837-5031f717-6c35-4194-be67-88f86d9e2543.png)

[🔼 Back to top](#table-of-contents)

---

# Route parameters

1. To get dynamic route parameters express gives parameter syntax `:<name>`

```javascript
app.get("/friends/:id", (req, res) => {
  // read the parameter value
  const id = req.params.id;
  const friend = friends[id];

  // it's important to validate the user input
  // not undefind
  if (friend) {
    res.status(200).json(friend);
  } else {
    // you can use method chaining to set status and then json response
    res.status(404).json("data not found");
  }
});
```

[🔼 Back to top](#table-of-contents)

---

# Development Dependencies

1. Development dependencies are the dependencies that need only to build the project, these dependencies are increase the development experience.
2. Example: **nodemon**
   > **nodemon** helps to auto restarting the server when the changes made in the code without restarting the server manually.

```bash
npm install nodemon --save-dev
```

```json
// the updated package.json file
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "watch": "nodemon index.js"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
```

3. Now you can run `npm run watch`. Here run command is used for custom or user defined script.

[🔼 Back to top](#table-of-contents)

---

# Middleware

1. Middleware are the functions that run between or in the middle of request comes in and response out from the API.
2. ![image](https://user-images.githubusercontent.com/77252075/230665303-ddaf9bd8-c574-47d9-b029-1bfc12429833.png)

```javascript
app.use(function (req, res, next) {
  next();
});
```

3. From the above image after the middleware 1 **next()** is called and it goes on until the end middleware comes.
4. **next()** function is responsible for order of middleware called.
5. Example:

- ```javascript
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
    // next() is the next middleware
  });

  app.get("/friends/:id", (req, res) => {
    // read the parameter value
    const id = req.params.id;
    const friend = friends[id];

    if (friend) {
      res.status(200).json(friend);
    } else {
      res.status(404).json("data not found");
    }
  });
  ```

  - after the next() function the below route is get executed and again return back to the **app.use** middleware but before the(bottom to top moving) **next()** comes the response is sent. (look the above diagram)

[🔼 Back to top](#table-of-contents)

---

# Model View Controller (MVC)

1. MVC is a software design pattern.
2. Which helps to organize our code. i.e easier debug, scale etc.
3. Most **express** applicaiton use MVC.
4. ![image](https://user-images.githubusercontent.com/77252075/230685452-6abfa4f5-680e-4380-8b05-be244f360da2.png)

> Controller - User uses the controllers by making request. The controller understand the request and make some manipulation inside the model. The controller's responsibility is to pull, modify, and provide data to the user.

> Model - Model is our data (in memory array, database, API, or a JSON object). The model include function that helps to access the database.

> View - View is the applicaiton made in html that uses the data given by the model or controller. The view's job is to decide what the user will see on their screen, and how.

[🔼 Back to top](#table-of-contents)

---

# Model View Controller in Express

```javascript
// in index.js
const { getFriends } = require("./controllers/friends.controller");

app.post("/friends", postFriend);

// in friends.controller.js
function getFriends(req, res) {
  res.json(friends);
}

module.exports = {
  getFriends,
};
```

[🔼 Back to top](#table-of-contents)

---

# Express Routers

1. Router helps to organize the routes into smaller groups.
2. Router contains it's own set of middleware and routes.
3. It helps to modularize and easy to manage.

```javascript
// we create a route by using
const <name> = express.Router()
```

- Example

```javascript
// in friends.router.js
const express = require("express");

const {
  postFriend,
  getFriends,
  getFriend,
} = require("../controllers/friends.controller");

const friendsRouter = express.Router();

// post request
friendsRouter.post("/", postFriend);

friendsRouter.get("/", getFriends);
friendsRouter.get("/:id", getFriend);

module.exports = {
  friendsRouter,
};

// in index.js
const { friendsRouter } = require("./routes/friends.router");
app.use("/friends", friendsRouter);
```
