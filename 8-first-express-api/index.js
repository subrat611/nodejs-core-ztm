const express = require("express");

const PORT = 3000;

const app = express();

app.get("/", (req, res) => res.send("Hello World"));
app.get("/home", (req, res) => res.send("<h1>Home Page</h1>"));
app.get("/api", (req, res) =>
  res.send({
    api: "key",
  })
);

app.listen(PORT, () => console.log(`server start in port ${PORT}`));
