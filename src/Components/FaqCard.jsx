import React from "react";

const FaqCard = ({ data, isOpen, onToggle }) => {
  return (
    <div className="full-box">
      <div className="ques-ans-container">
        <h2>{data.Ques}</h2>
        {isOpen && <p>{data.Ans}</p>}
      </div>
      <div className="btn-container-n">
        <button className="btn" onClick={onToggle}>
          {isOpen ? "⬆" : "⬇"}
        </button>
      </div>
    </div>
  );
};

export default FaqCard;
