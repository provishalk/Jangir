import React from "react";
import { Container } from "react-bootstrap";
import "./Cases.scss";
import RecentCases from "./RecentCases/RecentCases";
import SubscribeForm from "./SubscribeForm/SubscribeForm";

const Cases = () => {
  return (
    <>
      <div className="cases" id="Cases">
        <Container>
          <header>
            <h1>What say our clients about our awesome service</h1>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              vestibulum, nisi at dignissim
            </h6>
          </header>
          <div className="cases__body">
            <div className="cases__body__card">
              <div className="cases__body__card__userImg">
                <img src="https://i.pravatar.cc/100?u=132" alt="" />
              </div>
              <div className="cases__body__card__user">
                <h4 className="cases__body__card__user__name">
                  Mahadi Shopnil
                </h4>
                <p>CEO Data strategies</p>
                <p className="cases__body__card__user__about">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus vestibulum, nisi at dignissi, nisi at dignissim,
                  consectetur adipiscing elit
                </p>
              </div>
            </div>
            <div className="cases__body__card">
              <div className="cases__body__card__userImg">
                <img src="https://i.pravatar.cc/100?u=5" alt="" />
              </div>
              <div className="cases__body__card__user">
                <h4 className="cases__body__card__user__name">Mahfuz Riad</h4>
                <p>Data science strategies</p>
                <p className="cases__body__card__user__about">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus vestibulum, nisi at dignissi, nisi at dignissim,
                  consectetur adipiscing elit
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <RecentCases />
      <SubscribeForm/>
    </>
  );
};

export default Cases;
