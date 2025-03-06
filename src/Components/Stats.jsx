import React from "react";
import "../Styles/Stats.css";
const Stats = () => {
  return (
    <div className="parent-container">
      <div className="section">
        <div className="card">
          <span>200,000+</span>
          <span> students assisted</span>
        </div>
        <div className="card">
          <span>40,000+</span>
          <span> assisted</span>
        </div>
      </div>
      <div className="section">
        <div className="card">
          <span>200,000+</span>
          <span> students assisted</span>
        </div>
      </div>
      <div className="section">
        <div className="card">
          <span>200,000+</span>
          <span> indian cities served</span>
        </div>
        <div className="card">
          <span>4000+</span>
          <span>universities showcased</span>
        </div>
      </div>
      <div className="section">
        <div className="card">
          <span>₹25 crore</span>
          <span> in scholarships available</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
