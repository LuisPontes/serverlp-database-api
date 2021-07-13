module.exports = (sequelize, Sequelize) => {
    const Reserve = sequelize.define("reserves", {

        owner: {
            type: Sequelize.INTEGER
        },
        start: {
            type: Sequelize.STRING
        },
        end: {
            type: Sequelize.STRING
        },
        resourceId: {
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING
        },
        rrule: {
            type: Sequelize.STRING
        },
        bgColor: {
            type: Sequelize.STRING
        }

    });

    return Reserve;
};
