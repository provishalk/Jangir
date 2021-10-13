import React from "react";
import { Container } from "react-bootstrap";
import logo from "../../img/logo.png";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <Container className="footer__container">
        <div className="footer__container__card">
          <div className="footer__container__card__logo-container">
            <img src={logo} alt="" />
          </div>
          <p className="footer__container__card__address"> 821 11g Street, Office 372 Berlin, De 1524 GA</p>
        </div>
        <div className="footer__container__card">
          <h6>Links</h6>
          <ul>
            <li>About us</li>
            <li>Our News</li>
            <li>Our Portfolio</li>
            <li>Solution</li>
            <li>Contacts</li>
            <li>Out Careers</li>
          </ul>
        </div>
        <div className="footer__container__card">
          <h6>Services</h6>
          <ul>
            <li>Technology</li>
            <li>Healthcare</li>
            <li>Data Science</li>
            <li>Applied math</li>
            <li>Data analysis</li>
          </ul>
        </div>
        <div className="footer__container__card">
          <h6>Get In Touch</h6>
          <p>Sinfosdot@gmail.com</p>
          <p>+88 016 826 48 11</p>
          <h6>Sign up for Newsletter</h6>
          <div className="footer__container__card__subscribe">
            <input type="text" placeholder="Email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
