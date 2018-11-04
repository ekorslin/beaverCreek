import axios from 'axios';
const instance = axios.create();

instance.interceptors.request.use(function (request) {
  var authToken = sessionStorage.jwt
  if (authToken) {
    if (request.headers && !request.headers.Authorization) {
      request.headers['Authorization'] = `Bearer ${authToken}`
    }
  }
  // request.headers.post['Content-Type'] = 'application/json'
  return request
})

export default instance




// Passport operates on server as a gatekeeper. When you login it fiters out who is a real user or not. For any other protected route it will do the same thing.
// Implemented JSON web token, which is an ID that can be used in leiu of user name and password each time.
// When you login with the correct credientials, you are sent a token instead of cookies after credientials are validated.
// Passport sends react a token that we are storing in session storage (outside of the react ecosystem). When you log out, the token is deleted from session storage.
