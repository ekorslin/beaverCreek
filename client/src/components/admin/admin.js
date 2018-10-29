import React, { Component } from "react";
import axios from 'axios';
import "./stylesheets/style.css";

class Admin extends Component {

  login(event) {
    event.preventDefault()
    var credentials = {
      email: this.refs.email.value,
      password: this.refs.password.value,
    }
    axios.post('/login', {
    credentials: credentials
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  render() {
    return (
    <div><br/>
    <div className="row">
    <div className="col-md-4"></div>
    <div className="col-md-4">
      <h2>Administrator Login</h2>
      <form className="login">
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" ref="email" placeholder="Email"/>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" ref="password" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-outline-dark" onClick={this.login.bind(this)}>Login</button>
      </form>
      <br />
      <p>Or sign up <a href="/">here</a></p>
    </div>
    </div>
    <div className="col-md-4"></div>
    </div>
    );
  }
}


export default Admin;


