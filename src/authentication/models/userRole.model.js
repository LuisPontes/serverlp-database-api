module.exports = (sequelize, Sequelize) => {
  const UserRole = sequelize.define("user_roles", {
    roleId: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    userId: {
      type: Sequelize.INTEGER,
      primaryKey: true
    }
  });

  return UserRole;
};
