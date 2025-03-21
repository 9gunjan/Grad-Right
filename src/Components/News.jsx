import React, { useState } from "react";
import "../Styles/News.css";
import NewsCard from "./NewsCard";
import { newsData } from "../Constant/NewsData";

const News = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3;

  const handleNext = () => {
    if (startIndex + visibleCards < newsData.length) {
      setStartIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };
  console.log(newsData.length)

  return (
    <div className="parent-news-container">
      <h2 className="heading-news">In the News</h2>
      <div className="news-cards-container" >
        {newsData.slice(startIndex, startIndex + visibleCards).map((item, index) => (
          <NewsCard key={index + startIndex} data={item} />
        ))}
      </div>
      <div className="btns-container">
        <button className="left-btn" onClick={handlePrev} disabled={startIndex === 0}>
          ⬅️
        </button>
        <button className="right-btn" onClick={handleNext} disabled={startIndex + visibleCards >= newsData.length}>
          ➡️
        </button>
      </div>
    </div>
  );
};

export default News;