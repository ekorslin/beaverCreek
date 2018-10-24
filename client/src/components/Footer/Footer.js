import React from "react";
// import { Link } from "react-router-dom";
// import { Grid, Nav, NavItem } from 'react-bootstrap';
import { div, i, h3 } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
import "./Footer.css";

function Footer(/*props*/) {
  return (
    <footer class="navbar-dark fixed-bottom bg-dark" id="footerSection">

      <div>
        <FontAwesomeIcon
          icon="envelope"
          color="#6DB65B"
          size="sm"
        />
        {' '}Username
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 text-center">
            <div class="service-box mt-5 mx-auto">
              <i class="fa fa-4x fa-diamond text-primary mb-3 sr-icons"></i>
              <h3 class="mb-3 text-faded">Section One</h3>
              <p class="text-light mb-0 text-light">Text Goes Here...Text Goes Here...Text Goes Here...Text Goes Here...Text Goes Here...Text Goes Here</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
            <div class="service-box mt-5 mx-auto">
              <i class="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
              <h3 class="mb-3 text-faded">Section Two</h3>
              <p class="text-light mb-0 text-light">Text Goes Here...Text Goes Here...Text Goes Here...Text Goes Here...Text Goes Here...Text Goes Here</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
            <div class="service-box mt-5 mx-auto">
              <i class="fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons"></i>
              <h3 class="mb-3 text-faded">Section Three</h3>
              <p class="text-light mb-0">Text Goes Here...Text Goes Here...Text Goes Here...Text Goes Here...Text Goes Here...Text Goes Here</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
            <div class="service-box mt-5 mx-auto">
              <i class="fa fa-4x fa-heart text-primary mb-3 sr-icons"></i>
              <h3 class="mb-3 text-faded">Section Four</h3>
              <p class="text-light mb-0">Text Goes Here...Text Goes Here...Text Goes Here...Text Goes Here...Text Goes Here...Text Goes Here</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center small copyright"> © NU Coding Bootcamp 2018 </div>
    </footer>
  );
}

export default Footer;
