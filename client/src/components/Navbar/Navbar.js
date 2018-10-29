import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// if you want the old fontAwesome icon, replace the img tag under the link in the navbar const with the following:

// <FontAwesomeIcon
//   icon="golf-ball"
//   color="#6DB65B"
//   size="sm"
// />
// {' '}BeaverCreek

// Used this as reference for the above fontAwesomeIcon: https://alligator.io/react/font-awesome/
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">
      <img src="logo.png" alt="Logo" size="10%" />{' '}Beaver Creek
    </Link>

    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/book" ||
            window.location.pathname === "/book"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/book" className="nav-link">
            Tee-Times
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/contact"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/contact" className="nav-link">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="/admin">Admin Login</a>
            </li>
        </ul>
  </nav>
);

export default Navbar;
