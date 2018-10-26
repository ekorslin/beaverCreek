module.exports = function(sequelize, DataTypes) {
    var TeeTime = sequelize.define("TeeTime", {
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