const { friends } = require("../models/friends.model");

function postFriend(req, res) {
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
}

function getFriends(req, res) {
  res.json(friends);
}

function getFriend(req, res) {
  // read the parameter value
  const id = req.params.id;
  const friend = friends[id];

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json("data not found");
  }
}

module.exports = {
  postFriend,
  getFriends,
  getFriend,
};
