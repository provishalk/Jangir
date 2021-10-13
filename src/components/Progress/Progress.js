import React from "react";
import { Container } from "react-bootstrap";
import { GiProcessor } from "react-icons/gi";
import { BsFillChatRightTextFill } from "react-icons/bs";
import { RiLightbulbFlashLine } from "react-icons/ri";
import discussImg from "../../img/discuss.png";
import "./Progress.scss";
const Progress = () => {
  return (
    <div className="progress-container" id="Page">
      <Container className="progress-container__body">
        <div className="progress-container__body__left-panel">
          <h1>
            How it work
            <br />
            delivering the insights
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            vestibulum, nisi at dignissim sodales, leo nunc gravida lorem, nec
            venenatis nunc diam id diam.
          </p>
          <img src={discussImg} alt="" />
        </div>
        <div className="progress-container__body__right-panel">
          <div>
            <div className="progress-container__body__right-panel__card blue-svg">
              <GiProcessor />
              <h6>Data Ideas & concepts</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div>
            <div className="progress-container__body__right-panel__card green-svg">
              <BsFillChatRightTextFill />
              <h6>Testing & Trying</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="progress-container__body__right-panel__card red-svg">
              <RiLightbulbFlashLine />
              <h6>Final Analytics Data</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </Container>
      <div className="progress-container__footer">
        <div className="progress-container__footer__card" > 
          <h2 style={{ color: "#f94848" }}>+15k</h2>
          <h4>Successful work</h4>
        </div>
        <div className="progress-container__footer__card" >
          <h2 style={{ color: "#396bea" }}>07%</h2>
          <h4>increase in upgrade</h4>
        </div>
        <div className="progress-container__footer__card" >
          <h2>+40k</h2>
          <h4>Data Management</h4>
        </div>
      </div>
    </div>
  );
};

export default Progress;
