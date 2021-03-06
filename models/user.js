// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines.
var bcrypt = require("bcrypt-nodejs");
// Creating our User model using sequelize
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
      isEmail: true
      }
    },
    // The password cannot be null, so a value must be entered for value for this
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // The first name cannot be null, so a value must be entered for value for this
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // The last name cannot be null, so a value must be entered for value for this
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    // Compare the entered password with the saved hashed passwords in the database.
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};
