const db = require("../models");
const Example_T = db.example;
const Image_T = db.images;

const Op = db.Sequelize.Op;

// Create and Save a new Example_T
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a data
  const data_obj = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save Example_T in the database
  Example_T.create(data_obj)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Example_T.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Example_Ts."
      });
    });
};

// Find a single Example_T with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Example_T.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Example_T with id=" + id
      });
    });
};

// Update a Example_T by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Example_T.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Example_T was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Example_T with id=${id}. Maybe Example_T was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Example_T with id=" + id
      });
    });
};

// Delete a Example_T with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Example_T.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Example_T was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Example_T with id=${id}. Maybe Example_T was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Example_T with id=" + id
      });
    });
};

// Delete all Example_Ts from the database.
exports.deleteAll = (req, res) => {
  Example_T.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Example_Ts were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Example_Ts."
      });
    });
};

// find all published Example_T
exports.findAllPublished = (req, res) => {
  Example_T.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Example_Ts."
      });
    });
};
