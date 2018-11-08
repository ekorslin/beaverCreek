import React, { Component } from "react";
// import axios from 'axios';
import axios from "../../api/axios";
// import "./stylesheets/style.css";
import "./contact.css";

// creating class called Contact
class Contact extends Component {

  contactUs = (event) => {
    event.preventDefault()
    var User = {
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
    }
    axios.post("/contact", {
    User: User
  })
  .then(function (res) {
    alert("Thank you. Your request has been submitted, and is being reviewed by our support team.")
    window.location.href="/";
    // res.redirect(res, "/");
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  render() {
    return (
    <div>

      <div class="corner-ribbon top-left sticky red shadow">Undergoing Maintenance1</div>
      <div class="corner-ribbon top-right sticky blue">Undergoing Maintenance2</div>
      <div class="corner-ribbon bottom-left sticky orange">Undergoing Maintenance3</div>
      <div class="corner-ribbon bottom-right sticky green shadow">Undergoing Maintenance4</div>

      <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <h2>Contact Us</h2>
        <form className="contactForm">
          <div className="form-group">
            <label for="exampleContactInputFirstName">First Name</label>
            <input type="text" className="form-control" ref="firstName" placeholder="FIrst Name"/>
          </div>
          <div class="form-group">
            <label for="exampleContactInputLastName">Last Name</label>
            <input type="text" className="form-control" ref="lastName" placeholder="Last Name"/>
          </div>
          <div className="form-group">
            <label for="exampleContactInputEmail">Email address</label>
            <input type="email" className="form-control" ref="email" placeholder="Email"/>
          </div>
          <div class="form-group">
            <label for="exampleContactInputPassword">Password</label>
            <input type="password" className="form-control" ref="password" placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-outline-dark" onClick={this.contactUs.bind(this)}>Submit</button>
        </form>
        <br />
        <p>Or return to main page <a href="/">here</a></p>
      </div>
      </div>
      <div className="col-md-4"></div>
    </div>
    );
  }
}

export default Contact;
