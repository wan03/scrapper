const User = require("../models/user");

function addName(req, res) {
  var myData = new User(req.body);
  myData
    .save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
}

function getNames(req, res) {
  User.findAllUsers((err, users) => {
    res.status(200).json(users);
  });
}

function changePassword(req, res) {
  const email = req.body.email,
    password = req.body.password;

  User.changePassword(email, password, (err, u) => {
    res.status(200).send("success");
  });
}

module.exports = {
  addName,
  getNames,
  changePassword
};
