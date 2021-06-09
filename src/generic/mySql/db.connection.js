const mysql = require('mysql');
const dbConfig = require("../config/db.config.js");
const pool = mysql.createPool({
  connectionLimit: 2,
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD
});


module.exports = pool;


// const mysql = require("mysql");
// const dbConfig = require("../config/db.config.js");

// Create a connection to the database
// const connection = mysql.createConnection({
//   host: dbConfig.HOST,
//   port: dbConfig.PORT,
//   user: dbConfig.USER,
//   password: dbConfig.PASSWORD
//   //database: dbConfig.DB,

// });
// open the MySQL connection
// connection.connect(error => {
//   if (error){
//     console.log("Faill connected to the database.",error.sqlMessage);
//     //throw error;
//   } else{
//     console.log("Successfully connected to the database.");
//   }

// });
// module.exports = connection;









