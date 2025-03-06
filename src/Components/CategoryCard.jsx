import React from "react";
import "../Styles/Categories.css";
import { categoriesData } from "../Constant/CategoriesData";

const CategoryCard = ({ data = {} }) => {
  // console.log(Object.values(data.bullets[0]));
  // output of above = ['Shortlist from 40,000+ programs abroad with AI-powered selection', 'Receive personalized mentorship from selection to enrollment', 'Connect directly with admissions officers, faculty, and alumni']
  //now i can just map on this array and show the values of bullet inside my <li></li> below :)

  return (
    <div className="full-container-box">
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
            <img
              className="image"
              src="https://picsum.photos/200/300"
              alt="img"
            ></img>
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
