import React from "react";
import { Container } from "react-bootstrap";
import { FcDocument, FcPieChart, FcIdea, FcServices } from "react-icons/fc";
import { BsArrowRight } from "react-icons/bs";
import "./Services.scss";
const Services = () => {
  return (
    <div className="services" id="Services">
      <Container>
        <header>
          <h1>Our Offer Data Science and Analytics Services</h1>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
            Perspiatis sequi delectus maxime.
          </h5>
        </header>

        <div className="services__container">
          <div className="services__container__card services__container__card__active">
            <FcDocument />
            <p>Start your AI</p>
            <h5>Data strategies Start your AI</h5>
            <div className="services__container__card__right-arrow">
              <BsArrowRight />
            </div>
          </div>
          <div className="services__container__card">
            <FcPieChart />
            <p>Data Analysis</p>
            <h5>Digital Data Consulting for Science lab</h5>
            <div className="services__container__card__right-arrow">
              <BsArrowRight />
            </div>
          </div>
          <div className="services__container__card">
            <FcIdea />
            <p>Digital Intelligence</p>
            <h5>Data strategies Start your AI</h5>
            <div className="services__container__card__right-arrow">
              <BsArrowRight />
            </div>
          </div>
          <div className="services__container__card">
            <FcServices />
            <p>Machine Learning</p>
            <h5>Data strategies Start your AI</h5>
            <div className="services__container__card__right-arrow">
              <BsArrowRight />
            </div>
          </div>
        </div>
      </Container>
      <button>More Services</button>
    </div>
  );
};

export default Services;
