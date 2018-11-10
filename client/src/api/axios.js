// Importing the axios dependency
import axios from 'axios';
// Creating an instance using the config defaults provided by the library
// At this point the timeout config value is `0` as is the default for the library
const instance = axios.create();

//Intercepting requests or responses
instance.interceptors.request.use(function (request) {
  // Creating an authToken variable that stores the JSON token in session storage. It will be removed when the session is ended.
  var authToken = sessionStorage.jwt
  // If there is an authToken, send the access token in the Authorization request header field (which is defined by HTTP/1.1). The client uses the Bearer authentication scheme to transmit the access token.
  if (authToken) {
    if (request.headers && !request.headers.Authorization) {
      request.headers['Authorization'] = `Bearer ${authToken}`
    }
  }
  // request.headers.post['Content-Type'] = 'application/json'
  return request
})

// Exporting our instance as the default.
export default instance
