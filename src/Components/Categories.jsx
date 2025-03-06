import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
import "../Styles/Categories.css";
import { categoriesData } from "../Constant/CategoriesData.js";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(categoriesData[0].title);

  return (
    <div>
      <div className="title-container">
        {categoriesData.map((category) => (
          <button
            key={category.title}
            className={`category-title ${
              activeCategory === category.title ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category.title)}
          >
            {category.title}
          </button>
        ))}
      </div>

    
      {categoriesData
        .filter((category) => category.title === activeCategory)
        .map((category) => (
          <CategoryCard key={category.title} data={category} />
        ))}
    </div>
  );
};

export default Categories;
