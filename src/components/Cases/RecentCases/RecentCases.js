import React from "react";
import { Container } from "react-bootstrap";
import "./RecentCases.scss";
import strategy from "../../../img/strategy.png";
const RecentCases = () => {
  return (
    <div className="recent-cases">
      <Container className="recent-cases__container">
        <div className="recent-cases__container__left-panel">
          <img src={strategy} alt="" />
        </div>
        <div className="recent-cases__container__right-panel">
          <h6>10+ Recent Case</h6>
          <h1>#1 Data Analytics strategy projects</h1>
          <p>
            Data analytics project ideas that can boot your portfolio and help
            land science job. The best way to get a job in data science is to
            showcase your skills with a portfolio of data analytics projects.
          </p>
          <button>View Projects</button>
        </div>
      </Container>
    </div>
  );
};

export default RecentCases;
