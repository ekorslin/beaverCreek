// Dependencies
import React from "react";
import { div, i, h5 } from 'react-bootstrap';
import "./Footer.css";

function Footer() {
  return (
    <footer className="navbar-dark  bg-dark" id="footerSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 text-center">
            <div className="service-box mt-4 mx-auto">
              <i className="fa fa-2x fa-cutlery text-danger mb-3 sr-icons"></i>
              <h5 className="mb-3 text-faded">Dinner's On!</h5>
              <p className="text-light mb-0 text-light">Come try the mouth-watering Friday Night Fish Boil...Its on each Friday!</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-4 mx-auto">
              <i className="fa fa-2x fa-beer text-primary mb-3 sr-icons"></i>
              <h5 className="mb- text-faded">Beer on Tap</h5>
              <p className="text-light mb-0 text-light">Six of your favorite domestic beers on tap in the clubhouse.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-4 mx-auto">
              <i className="fa fa-2x fa-trophy text-info mb-3 sr-icons"></i>
              <h5 className="mb-3 text-faded">Leagues</h5>
              <p className="text-light mb-0 text-light">Grab a friend and join in one of our local league tournaments...all summer long!</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-4 mx-auto">
              <i className="fa fa-2x fa-television text-secondary mb-3 sr-icons"></i>
              <h5 className="mb-3 text-faded">Banquet Hall</h5>
              <p className="text-light mb-0 text-light">Book our banquet room today for your upcoming occassion.  Call today!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center small copyright"> © NU Coding Bootcamp 2018 </div>
    </footer>
  );
}

export default Footer;
