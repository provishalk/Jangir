import React from "react";
import About from "../About/About";
import Blog from "../Blogs/Blog";
import Cases from "../Cases/Cases";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Subsection from "../Home/Subsection/Subsection";
import Progress from "../Progress/Progress";
import Services from "../Services/Services";
import "./Dashboard.scss";
const Dashboard = () => {
  return (
    <div>
      <Home />
      <Subsection />
      <About />
      <Services />
      <Progress />
      <Cases />
      <Blog />
      <Footer />
    </div>
  );
};

export default Dashboard;
