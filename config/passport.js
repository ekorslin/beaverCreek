// Some generals regarding passport implementation:
// Passport operates on server as a gatekeeper. When you login it fiters out who is a real user or not. For any other protected route it will do the same thing.
// Implemented JSON web token, which is an ID that can be used instead of user name and password each time.
// When you login with the correct credientials, you are sent a token instead of cookies after credientials are validated.
// Passport sends react a token that we are storing in session storage (outside of the react ecosystem). When you log out, the token is deleted from session storage

// Requiring passport, passport and passport-local, and passport-jwt (so that we can use JSON tokens for authenticaion rather than cookies)
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
const passportJWT = require('passport-jwt');
// Creating a new const that takes the passportJWT.Strategy and assigning it to JWTStrategy for more efficient coding
const JWTStrategy = passportJWT.Strategy;
// Creating a new const that takes the passportJWT.ExtractJwt and assigning it to ExtractJWT for more efficient coding
const ExtractJWT = passportJWT.ExtractJwt;
// Requiring dotenv - a zero-dependency module that loads environment variables from a .env file into process.env
require('dotenv').config();
// Requring our index model and assigning it to our var db
var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "email"
  },
  function(email, password, done) {
    // When a user tries to sign in this code runs
    db.User.findOne({
      where: {
        email: email
      }
    }).then(function(dbUser) {
      // If there's no user with the given email
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
));

// Using a new JWTStrategy with passport, and each request will extract the JWT from the header as a bearer token.
// The header (first part of the JWT structure) typically consists of two parts: the type of the token, which is JWT, and the hashing algorithm being used, such as HMAC SHA256 or RSA. Whenever the user wants to access a protected route or resource, the user agent will send the JWT in the Authorization header using the Bearer schema.

passport.use(new JWTStrategy(
  {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
  },
// The second part of the token is the payload, which contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims.
// This function is passing in two parameters, jwtPayload and cb (or the callback)
  function (jwtPayload, cb) {
    // Returning the id from the User table
    return db.User.findById(jwtPayload)
    .then(user => {
      return cb(null, user)
    })
    .catch(err => {
      return cb(err)
    });
  }
));

// In order to help keep authentication state across HTTP requests, Sequelize needs to serialize and deserialize user
// Consider this section as a boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
