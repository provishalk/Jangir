import React from "react";
import { Container } from "react-bootstrap";
import "./Blog.scss";
import card1 from "../../img/card1.PNG";
import card2 from "../../img/card2.PNG";
import card3 from "../../img/card3.PNG";
const Blog = () => {
  return (
    <div className="blog" id="Blog">
      <Container className="blog__container">
        <header>
          <h1>Latest data science and our company news</h1>
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            vestibulum, nisi at dignissi, nisi at dignissim, consectetur
            adipiscing
          </h6>
        </header>
        <div className="blog__container__card-container">
          <div class="blog__container__card">
            <img src={card1} alt="" />
            <div className="blog__container__card__tag">Data Science</div>
            <h5>Data Engineer, Data Analyst Data Scientist</h5>
            <footer>
              <p>May 21, 2021</p>
              <p>0 comments</p>
            </footer>
          </div>
          <div class="blog__container__card">
            <img src={card2} alt="" />
            <div className="blog__container__card__tag">Data Science</div>
            <h5>How Artificial Intelligence is changing the industry</h5>
            <footer>
              <p>May 21, 2021</p>
              <p>0 comments</p>
            </footer>
          </div>
          <div class="blog__container__card">
            <img src={card3} alt="" />
            <div className="blog__container__card__tag">Data Science</div>
            <h5>What are Service Graph connectors in ServiceNow?</h5>
            <footer>
              <p>May 21, 2021</p>
              <p>0 comments</p>
            </footer>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
