const express = require("express");

const { getMessage } = require("./controllers/messages.controller");
const { friendsRouter } = require("./routes/friends.router");

const PORT = 5000;

const app = express();

app.get("/", (req, res) => res.send("Hello World"));
app.get("/home", (req, res) => res.send("<h1>Home Page</h1>"));
app.get("/api", (req, res) =>
  res.send({
    api: "key",
  })
);

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
  // next() is the next middleware
});

app.use(express.json());

app.use("/friends", friendsRouter);

app.get("/messages", getMessage);

app.listen(PORT, () => console.log(`server start in port ${PORT}`));
