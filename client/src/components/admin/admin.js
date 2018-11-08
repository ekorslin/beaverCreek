import React, { Component } from "react";
// import axios from 'axios';
import axios from "../../api/axios";
// import "./stylesheets/style.css";
import "./Admin.css";

class Admin extends Component {

  login = (event) => {
    event.preventDefault()
    axios.post("/login", {
      email: this.refs.email.value,
      password: this.refs.password.value,
    })
    .then(res => {
      // window.location.href="/adminScreen";
      sessionStorage.setItem("jwt", res.data.token);
      this.props.history.push("/adminScreen");
      console.log(res.data.token);
    })
    .catch(error => {
      alert("Sorry!  Invalid email & password combination.  Please try again.")
      console.log(error);
    });
    }

  render() {
    return (
    <div>
      <div className="row justify-content-center adminGrouping">
      <div className="col-md-4">
      </div>
        <div className="col-md-4">
          <h2>Administrator Login</h2>
          <form className="login">
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" ref="email" placeholder="Email"/>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" ref="password" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-outline-dark" onClick={this.login.bind(this)}>Login</button>
          </form>
          <br />
          <p>Or sign up <a href="/signup">here</a></p>
        </div>
      </div>
      <div className="col-md-4"></div>
    </div>
    );
  }
}


export default Admin;
