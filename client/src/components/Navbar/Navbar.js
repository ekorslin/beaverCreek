import React from "react";
import { Link } from "react-router-dom";
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
    <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <a className="nav-link" href="/admin">Admin Login</a>
        </li>
    </ul>
  </nav>
);

export default Navbar;
