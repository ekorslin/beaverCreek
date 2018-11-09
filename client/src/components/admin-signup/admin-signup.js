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

  login = (event) => {
    this.props.history.push("/admin");
  }


  render() {
    return (
    <div><br/>
    <div className="row adminGrouping">
    <div className="col-md-4"></div>
    <div className="col-md-4">
      <h2>Administrator Registration</h2>
      <form className="login">
        <div className="form-group">
          <label for="exampleInputEmail1">First Name</label>
          <input type="text" className="form-control" ref="firstName" placeholder="First Name"/>
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
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-4">
        <button type="submit" className="btn btn-outline-light" onClick={this.signUp.bind(this)}>Register</button>
      
        </div>
        <button type="submit" className="btn btn-outline-light" onClick={this.login.bind(this)}>Return to Login</button>
        <div className="col-md-4"></div>
        </div>
      </form>
    </div>
    </div>
    <div className="col-md-4"></div>
    </div>
    
    );
  }
}


export default AdminSignup;
