const pool = require("./db.connection.js");


// constructor
const Query = function () {
};

Query.findById = (schema, table, id, result) => {

  pool.getConnection(function (err, connection) {
    if (err) {
      return;
    }
    connection.changeUser({ database: schema });
    connection.query(`SELECT * FROM ${table} WHERE id = ${id}`, function (err, res) {
      connection.release();
      if (err) {
        console.log("query error: ", err);
        result(null, err);
        return;
      }

      console.log("Results: ", res);
      result(null, res);
    });
  });

};


Query.getAll = (schema, table, result) => {


  pool.getConnection(function (err, connection) {
    if (err) {
      return;
    }
    connection.changeUser({ database: schema });
    connection.query(`SELECT * FROM ${table}`, function (err, res) {
      connection.release();
      if (err) {
        console.log("query error: ", err);
        result(null, err);
        return;
      }

      console.log("Results: ", res);
      result(null, res);
    });
  });
};

module.exports = Query;
