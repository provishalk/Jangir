import React from "react";
import { Container } from "react-bootstrap";
import DefaultNavBar from "../DefaultNavBar/DefaultNavBar";
import { FiCheck } from "react-icons/fi";
import { IoIosReturnRight } from "react-icons/io";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home home__background-img" id="Home">
      <DefaultNavBar />
      <Container>
        <div className="home__left-panel">
          <h1>Data Analytics solutions for startup Agency</h1>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a
            purus nibh. Suspendisse porttitor, enim in commodo dapibus
            
          </h5>
          <p>
            <FiCheck />
            Learn with or comprehensive curriculum and experienced
          </p>
          <p>
            <FiCheck />
            Step into the word of practical data science.
          </p>
          <div className="home__btn-container">
            <button className="home__button">Learn More</button>
            <IoIosReturnRight />
            <p>Learn about our Latest work intro</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
