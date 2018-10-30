const db = require("../models");

// Requiring our models and passport as we've configured it
var passport = require("../config/passport");

module.exports = function(app) {

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
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

    app.get("/api/teetimes", function(req, res) {
        db.TeeTime.findAll({}).then(function(dbTeeTime) {
            res.json(dbTeeTime);
        });
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
    app.delete("/api/teetimes/:id", function(req, res) {
        db.TeeTime.destroy({
            where: {
                id: req.params.id
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
