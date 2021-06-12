import React, { useState } from "react";
import "./Navbar.css";
import logo from '../asset/Group 220.png';

const Navbar = () => {
  return (
    <React.Fragment>
      <header className="navbar-header">
        <img className="nav-logo" src={logo} alt="Image not found" />
        <h3 className="nav-brand">Organic</h3>

        <nav>
          <ul className="nav-links-wrapper">
            <li className="nav-links active">
              <a href="#" className="nav-link nav-link-1">Home</a>
            </li>
            <li className="nav-links">
              <a href="#" className="nav-link nav-link-2">Products</a>
            </li>
            <li className="nav-links">
              <a href="#" className="nav-link nav-link-3">Blogs</a>
            </li>
            <li className="nav-links">
              <a href="#" className="nav-link nav-link-4">About Us</a>
            </li>
          </ul>
        </nav>
        <a href="#" className="contact-link">
          <button>Contact</button>
        </a>
      </header>
    </React.Fragment>
  );
}

export default Navbar;