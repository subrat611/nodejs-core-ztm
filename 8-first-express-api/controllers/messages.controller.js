function getMessage(req, res) {
  res.send("<ul><li>Hello node</li></ul>");
}

module.exports = {
  getMessage,
};
