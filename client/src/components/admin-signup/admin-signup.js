import React, { Component } from "react";
// import axios from 'axios';
import axios from "../../api/axios";
// import "./stylesheets/style.css";
import "./Admin-Signup.css";

class AdminSignup extends Component {

  signUp = (event) => {
    event.preventDefault()
    var User = {
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
    }
    axios.post("/signup", {
    User: User
  })
  .then(function (res) {
    alert("Thank you.  You are now registered.")
    window.location.href="/admin";
    // res.redirect(res, "/admin");
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
      <h2>Administrator Registration</h2>
      <form className="login">
        <div className="form-group">
          <label for="exampleInputEmail1">First Name</label>
          <input type="text" className="form-control" ref="firstName" placeholder="FIrst Name"/>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Last Name</label>
          <input type="text" className="form-control" ref="lastName" placeholder="Last Name"/>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" ref="email" placeholder="Email"/>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" ref="password" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-outline-dark" onClick={this.signUp.bind(this)}>Register</button>
      </form>
      <br />
      <p>Or return to login <a href="/admin">here</a></p>
    </div>
    </div>
    <div className="col-md-4"></div>
    </div>
    
    );
  }
}


export default AdminSignup;
