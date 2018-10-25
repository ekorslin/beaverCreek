import React from "react";
// import { Link } from "react-router-dom";
// import { Grid, Nav, NavItem } from 'react-bootstrap';
import { div, i, h5 } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
import "./Footer.css";

function Footer(/*props*/) {
  return (
    <footer className="navbar-dark  bg-dark" id="footerSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-4 mx-auto">
              <i className="fa fa-2x fa-diamond text-danger mb-3 sr-icons"></i>
              <h5 className="mb-3 text-faded">Section One</h5>
              <p className="text-light mb-0 text-light">Text Goes Here...</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-4 mx-auto">
              <i className="fa fa-2x fa-paper-plane text-primary mb-3 sr-icons"></i>
              <h5 className="mb- text-faded">Section Two</h5>
              <p className="text-light mb-0 text-light">Text Goes Here...</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-4 mx-auto">
              <i className="fa fa-2x fa-newspaper-o text-info mb-3 sr-icons"></i>
              <h5 className="mb-3 text-faded">Section Three</h5>
              <p className="text-light mb-0 text-light">Text Goes Here...Text Goes Here...Text Goes Here...</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-4 mx-auto">
              <i className="fa fa-2x fa-heart text-secondary mb-3 sr-icons"></i>
              <h5 className="mb-3 text-faded">Section Four</h5>
              <p className="text-light mb-0 text-light">Text Goes Here...</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center small copyright"> © NU Coding Bootcamp 2018 </div>
    </footer>
  );
}

export default Footer;
