## Table of contents 📦

- [Why Express](#why-express❓)
  - [Setup a simple server](#setup-a-simple-server🚀)
  - [Defining Routes](#defining-routes)

---

# Why Express❓

1. Express js is a framwork build on top of node js, which provide minimum setup to create and run a web server.
2. Express lets you build single page, multi page and hybrid web and mobile applications.
3. Express comes with a default template engine.
4. Express support MVC (Model-View-Controller) architecture to design web application.

## Setup a simple server🚀

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
  ![image](https://user-images.githubusercontent.com/77252075/230498837-5031f717-6c35-4194-be67-88f86d9e2543.png)
