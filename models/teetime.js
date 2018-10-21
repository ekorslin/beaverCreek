module.exports = function(sequelize, DataTypes) {
    var TeeTime = sequelize.define("TeeTime", {
        name: DataTypes.STRING,
        date: DataTypes.STRING,
        time: DataTypes.STRING
    });
    return TeeTime;
};