const express = require("express");

const PORT = 5000;

const friends = [
  {
    id: 0,
    name: "subrat",
  },
  {
    id: 1,
    name: "hari",
  },
];

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

// post request
app.post("/friends", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      err: "missing friend name",
    });
  }
  const newFriends = {
    id: friends.length + 1,
    name: req.body.name,
  };
  friends.push(newFriends);
  res.json(newFriends);
});

app.get("/friends", (req, res) => res.json(friends));

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

app.listen(PORT, () => console.log(`server start in port ${PORT}`));
