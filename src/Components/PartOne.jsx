import React from "react";
import "../Styles/PartOne.css"
const PartOne = () => {
  return (
    <div className="part-one-container">
      <div className="container-left">
        <div className="heading">
          <h1>The Smarter Way to Study Abroad</h1>
        </div>
        <div className="heading-subtext">
          <p>
            Your Master’s abroad journey made easy with India’s first AI
            platform—selection to finance, insurance to forex—we’ve got you
            covered!
          </p>
        </div>
        <div className="part-one-button">
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>

      <div className="container-right">
        <img className="part-one-img" src="https://picsum.photos/200/300" alt="image"></img>
      </div>
    </div>
  );
};

export default PartOne;
