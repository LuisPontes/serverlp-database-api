module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {

    
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        }
      

    });

    return User;
};