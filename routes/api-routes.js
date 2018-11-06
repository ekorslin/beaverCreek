const db = require("../models");
const isAuthenticated = require("../config/middleware/isAuthenticated.js");
// Requiring our models and passport as we've configured it
const passport = require("../config/passport");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function(app) {

  // app.post("/adminScreen", isAuthenticated, function(req, res) {
  // passport recieves request. Is it okay? If yes, pass on to next function. Nestling passport here has it function as a gatekeeper.
  app.post("/adminScreen", passport.authenticate('jwt', {session: false}), function(req, res) {
      console.log(req.body.adminSelected.date);
      db.TeeTime.findAll({where: { date: req.body.adminSelected.date}, order: ['time']}).then(function(dbTeeTime) {
          res.json(dbTeeTime);
      });
  });

  // app.get("/success", isAuthenticated, function(req, res) {
  // app.get("/success", function(req, res) {
  //     console.log("You have successfully logged in!");
  //     res.json("SUCCESS IS YOURS");
  // });

  // // Using the passport.authenticate middleware with our local strategy.
  // // If the user has valid login credentials, send them to the members page.
  // // Otherwise the user will be sent an error
  //
  // app.post("/login", passport.authenticate("local", { session: false }), function(req, res) {
  //
  //
  //   // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  //   // So we're sending the user back the route to the members page because the redirect will happen on the front end
  //   // They won't get this or even be able to access this page if they aren't authed
  //
  //   res.json(res.data);
  //
  // });


  // use local stragety that was set up and don't store it as a session. Thihs is nested like thihs so that you can actually ht the login route to auth.
  // React needs somewhere to store token, and when you close out of the browser, it is deleted when the session is ended.
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
    //   res.redirect(307, "/admin");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
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
