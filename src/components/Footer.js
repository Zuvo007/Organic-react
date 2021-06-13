import React from "react";
import "./Footer.css";
import footerBackgroundImg from "../asset/Group 229.png";
import logoIcon from "../asset/Group 220.png";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="conclusion">
        <div className="logo-icon">
          <a href="/" className="icon-link">
            <img src={logoIcon} alt="" srcset="" />
          </a>
        </div>
        <div className="brand-name">
          <h2>Organic</h2>
        </div>
        <div className="conclusion-lines" style={{ width: "300px" }}>
          <p className="conclusio-text">
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor 
          </p>
        </div>
        <div className="copyright-icon">
          ©️ Copyright 2021 All rights Reserved Zu
        </div>
      </div>
      <div className="footer-menu">
        <h3 className="footer-menu-heading"><a href="#">Information</a></h3>
        <h5 className="footer-menu-options"><a href="#">About US</a></h5>
        <h5 className="footer-menu-options"><a href="#">Products</a></h5>
        <h5 className="footer-menu-options"><a href="#">Contact Us</a></h5>
        <h5 className="footer-menu-options"><a href="#">Terms of Service</a></h5>
      </div>
      <div className="follow-us">
        <h3 className="follow-us-heading">Follow Us</h3>
        <a href="#" className="fa fa-linkedin"></a>
        <a href="#" className="fa fa-instagram"></a>
        <a href="#" className="fa fa-youtube"></a>
        <a href="#" className="fa fa-google"></a>
        <a href="#" className="fa fa-facebook"></a>
        <a href="#" className="fa fa-twitter"></a>
      </div>
    </footer>
  );
}

export default Footer;
