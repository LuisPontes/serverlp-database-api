const QUERYS = require("../mySql/db.querys.js");



// Retrieve all QUERYSs from the database.
exports.findAll = (req, res) => {
    QUERYS.getAll(req.params.schema,req.params.table,(err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving QUERYSs."
        });
      else res.send(data);
    });
  };

  // Find a single QUERYS with a "schema" , "table" and "id"
exports.findOne = (req, res) => {
    QUERYS.findById(req.params.schema,req.params.table,req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found QUERYS with id ${req.params.QUERYSId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving QUERYS with id " + req.params.QUERYSId
          });
        }
      } else res.send(data);
    });
  };


