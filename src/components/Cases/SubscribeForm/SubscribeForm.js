import React from "react";
import { Container } from "react-bootstrap";
import "./SubscribeForm.scss";
const SubscribeForm = () => {
  return (
    <div className="subscribe">
      <Container className="subscribe__container">
        <div className="subscribe__container__left">
          <h1>Get Ready to Started It's Free & Very Easy</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been.
          </p>
        </div>
        <div className="subscribe__container__right">
          <div className="subscribe__container__right__card">
            <h4>Subscribe for Quote</h4>
            <label htmlFor="username">Name</label>
            <input type="text" id="username" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <button>Get a Quote</button>
            <p>
              Let's do great things together Free <span>Sign up</span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SubscribeForm;
