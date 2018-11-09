// This code should be executed in "strict mode," in which we can not use undeclared variables
"use strict";

// Requiring fs, path, Sequelize, basename, env, config, and db (as an empty array) for use with our DB
var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

// Passing config options for use with sequelize. If the configuration already has database, username, password configured, use that, otherwise, create these items in a new sequelize variable.
if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// This first call to readdirSync gets all the files in the directory of the currently executing script in a synchronous fashion (in this case /models/index.js is the currently executing script, so __dirname points to the models directory).

fs
  .readdirSync(__dirname)
// The below function call filters out the files that start with a . or are named .js
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
// Iterates over each file name and imports the file into the db.
  .forEach(function(file) {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });
// Iterates over each model in the db (index, teetime, and user) and invokes its associate function (if it has one), presumably to setup any associations between models, foreign keys, cascades, etc.
Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
      db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Exporting this module and assigning it to db
module.exports = db;
