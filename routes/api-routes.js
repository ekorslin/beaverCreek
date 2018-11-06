// Requring our models index file for sequelize purposes
const db = require("../models");
// Requiring the isAuthenticated js file, which serves as middleware for restricting routes that a user is not allowed to visit if they are not logged in
const isAuthenticated = require("../config/middleware/isAuthenticated.js");
// Requiring our models and passport as we've configured it
const passport = require("../config/passport");
// Requiring the JSON web token package so that we can use these tokens for authenticating
const jwt = require("jsonwebtoken");
// Requiring the zero-dependency "dotenv" module that loads environment variables from a .env file into process.env
// We are storing this configuration in the environment separate from code is based on The Twelve-Factor App methodology.
require("dotenv").config();

module.exports = function(app) {

// Passport recieves a request. We check to see if the requset is okay, If it is, pass it on to next function.
// Nestling passport here, as it functions as a gatekeeper.
app.post("/adminScreen", passport.authenticate('jwt', {session: false}), function(req, res) {
  // logging the date that the admin chooses to verify whether or not it shows
  console.log(req.body.adminSelected.date);
  // This is our sequelize query in which we pull the dates from the database that match the dates that the admin entered
  db.TeeTime.findAll({where: { date: req.body.adminSelected.date}, order: ['time']}).then(function(dbTeeTime) {
    // Sending a JSON response composed of a stringified version of the specified data from dbTeeTime
    res.json(dbTeeTime);
  });
});

  // Using local strategy for our login route that was set up and don't store it as a session.
  // This is nested like this so that you can hit the login route to auth.
  // React needs somewhere to store token, so we are storing it in session storage.
  // The token is deleted when the session is ended, via logout or an exit of the browser.
  app.post('/login', function (req, res) {
      passport.authenticate('local', { session: false }, (err, user, info) => {
        if (!user) {
          return res.sendStatus(401);
        }
        if (err) {
          return res.status(422).json(err.errors[0].message);
        }
        req.login(user, { session: false }, (err) => {
          if (err) {
            res.send(err);
          }
          const token = jwt.sign(user.id, process.env.JWT_SECRET);
          return res.json({
            token
          });
        });
      })(req, res);
    });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.User.email,
      password: req.body.User.password,
      firstName: req.body.User.firstName,
      lastName: req.body.User.lastName
    }).then(function() {
        window.location.href="/admin";
        res.sendStatus(201);
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });

  // Route for logging user out
  app.post("/logout", function(req, res) {
    req.logout();
    // res.redirect("/");
    res.sendStatus(200);
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.post("/submit", function(req, res) {
      db.TeeTime.create({
          date: req.body.TeeTime.date,
          time: req.body.TeeTime.time,
          name: req.body.TeeTime.name,
          email: req.body.TeeTime.email,
          phone: req.body.TeeTime.phone,
          numberGolfers: req.body.TeeTime.numberGolfers,
          comments: req.body.TeeTime.comments,
          cart: req.body.TeeTime.cart
      }).then(function(dbTeeTime) {
          res.json(dbTeeTime);
      });
  });

  // DELETE route for deleting teetimes. We can get the id of the teetime we want to delete from
  // req.params.id
  app.post("/adminScreen/delete", function(req, res) {
      console.log(req.body);
      db.TeeTime.destroy({
          where: {
              id: req.body.adminSelected.deleteId
          }
      }).then(function(dbTeeTime) {
          res.json(dbTeeTime);
      });
    });

  // PUT route for updating teetimes. We can get the updated teetimes from req.body
  app.put("/api/teetimes", function(req, res) {
      db.TeeTime.update({
          date: req.body.date,
          time: req.body.time
      }, {
          where: {
              id: req.body.id
          }
      }).then(function(dbTeeTime) {
          res.json(dbTeeTime);
      });
  });
};
