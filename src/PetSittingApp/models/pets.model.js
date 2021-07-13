module.exports = (sequelize, Sequelize) => {
    const Pet = sequelize.define("pets", {
      
      owner: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.DATE
      },
      breed: {
        type: Sequelize.STRING
      }

    });
  
    return Pet;
  };