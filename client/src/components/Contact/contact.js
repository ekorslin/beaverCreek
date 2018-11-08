import React, { Component } from "react";
// import axios from 'axios';
import axios from "../../api/axios";
// import "./stylesheets/style.css";
import "./Contact.css";

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

  contactUs = (event) => {
    this.props.history.push("/");
  }

  render() {
    return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">

            <div class="corner-ribbon top-left sticky grey shadow">Development</div>
            <div class="corner-ribbon top-right sticky grey">Development</div>
            <div class="corner-ribbon bottom-left sticky grey">Development</div>
            <div class="corner-ribbon bottom-right sticky grey shadow">Development</div>

            <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <h2 className="contactHeader">Contact Us</h2>
              <form className="contactForm">
                <div className="form-group">
                  <label for="exampleContactInputFirstName">First Name</label>
                  <input type="text" className="form-control" ref="firstName" placeholder="First Name"/>
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
                  <label for="exampleFormControlTextarea">Description of Issue</label>
                  <textarea class="form-control" id="exampleFormControlTextarea" rows="5"></textarea>
                </div>


                <div className="row">
                  <div className="col-md-5"></div>
                  <button type="submit" className="btn btn-outline-light" onClick={this.contactUs.bind(this)}>Submit</button>
                  <div className="col-md-4"></div>
                  </div>

            </form>
            </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Contact;
