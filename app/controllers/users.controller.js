const User = require("../models/users.model");

exports.create = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    const user = new User({
      email: req.body.email,
      password: req.body.password
    });

    User.create(use, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      else res.send(data);
    });
  };
  
  exports.findOne = (req, res) => {
    User.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving User with id " + req.params.id
          });
        }
      } else res.send(data);
    });
  };