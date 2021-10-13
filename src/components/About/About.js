import React from "react";
import { Container } from "react-bootstrap";
import "./About.scss";
const About = () => {
  return (
    <div className="about" id="about">
      <Container className="about__container">
        <header>
          <h1>Why Data Science Sdot Data Science for Everyone</h1>
        </header>
        <div className="about__content">
          <h4>
            Data Science sdot is one of the leading platform providing data
            science Solution
          </h4>
          <div className="about__content__body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              vestibulum, nisi at dignissim sodales, leo nunc gravida lorem, nec
              venenatis nunc diam id diam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              vestibulum, nisi at dignissim sodales, leo nunc gravida lorem, nec
              venenatis nunc diam id diam.
            </p>
          </div>
          <button>Learn More</button>
        </div>
      </Container>
    </div>
  );
};

export default About;
