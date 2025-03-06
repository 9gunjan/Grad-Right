import React from "react";
import "../Styles/Categories.css";

const CategoryCard = ({ data = {} }) => {
  return (
    <div className="full-container-box">
      <div className="card-nav-container">
        <div className="title-container">
          <div className="category-title">{data.title}</div>
        </div>
      </div>

      <div className="card-content-container">
        <div className="card-container-left">
          <div className="heading-container">
            <h2 className="category-heading">{data.heading}</h2>
          </div>

          <div className="category-bullets-container">
            <ul className="category-bullets">
              {Object.values(data.bullets[0]).map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>

          <div className="category-features-container">
            <ul className="category-features">
              {Object.values(data.features[0]).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right container (if needed) */}
        <div className="card-container-right">
          <div className="image-container">
            <img className="image" src="https://picsum.photos/200/300" alt="img"></img> 

          </div>
          <div className="btn-container">
            <button>{data.buttonName}</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
