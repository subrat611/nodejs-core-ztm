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
