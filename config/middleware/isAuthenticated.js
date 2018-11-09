// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {
    return next();
  }
  // If the user isn't logged in, send a 401 error - An HTTP status code that means the page you were trying to access cannot be loaded until you first log in with a valid user ID and password.
  return res.sendStatus(401);
};
