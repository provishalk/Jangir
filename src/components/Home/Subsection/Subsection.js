import React from "react";
import { FaCircle } from "react-icons/fa";
import "./Subsection.scss";
const Subsection = () => {
  return (
    <div className="subsection">
      <div className="subsection__card blue">
        <h6>Solutions Visualization</h6>
        <h4>Data Visualization Practices to Improve</h4>
        <FaCircle />
      </div>
      <div className="subsection__card pink mb">
        <h6>Data Consulting</h6>
        <h4>Consulting on invoice data capture</h4>
        <FaCircle />
      </div>
      <div className="subsection__card green">
        <h6>Data Case Studies</h6>
        <h4>Delivering the insights Data Case</h4>
        <FaCircle />
      </div>
    </div>
  );
};

export default Subsection;
