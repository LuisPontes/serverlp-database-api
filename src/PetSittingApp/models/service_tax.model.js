module.exports = (sequelize, Sequelize) => {
    const ServiceTax = sequelize.define("service_tax", {

        type: {
            type: Sequelize.STRING
        },
        hours: {
            type: Sequelize.INTEGER
        },
        priceHour: {
            type: Sequelize.DOUBLE
        }
    });

    return ServiceTax;
};
