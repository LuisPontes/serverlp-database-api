module.exports = db => {

  db.user = require("../models/user.model.js")(sequelize, Sequelize);
  db.role = require("../models/role.model.js")(sequelize, Sequelize);

  db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
  });
  db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
  });
  
};







