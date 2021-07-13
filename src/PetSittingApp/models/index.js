
module.exports = db => {

  db.pets = require("./pets.model.js")(db.sequelize, db.Sequelize);
  db.reserves = require("./reserves.model.js")(db.sequelize, db.Sequelize);

};
// const config = require("../config/db.config.js");

// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(
//   config.DB,
//   config.USER,
//   config.PASSWORD,
//   {
//     host: config.HOST,
//     dialect: config.dialect,
//     operatorsAliases: false,

//     pool: {
//       max: config.pool.max,
//       min: config.pool.min,
//       acquire: config.pool.acquire,
//       idle: config.pool.idle
//     }
//   }
// );

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;


// db.pets = require("./pets.model.js")(sequelize, Sequelize);

// db.pets.belongsToMany(db.pets, {
//   through: "user_roles",
//   foreignKey: "roleId",
//   otherKey: "userId"
// });


// db.ROLES = ["user", "admin", "moderator"];

// module.exports = db;










