// Sequelize Model TeeTime that will store the data for each round of golf that is scheduled.
module.exports = function(sequelize, DataTypes) {
    var TeeTime = sequelize.define("TeeTime", {
        // ALl data points are being stored as strings, integers or booleans
        date: DataTypes.STRING,
        time: DataTypes.STRING,
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        numberGolfers:  DataTypes.INTEGER,
        comments:  DataTypes.STRING,
        cart: DataTypes.BOOLEAN
    });
    return TeeTime;
};
