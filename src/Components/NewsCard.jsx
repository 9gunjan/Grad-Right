import React from "react";
import "../Styles/News.css";

const NewsCard = ({ data }) => {
  return (
    <div className="news-card-single-container">
      <img className="paper-img" src={data.image} alt="paper-image" />
      <div className="paper-text">{data.title}</div>
      <div className="paper-source">{data.source}</div>
      <a href={data.link}>Read More</a>
    </div>
  );
};

export default NewsCard;
