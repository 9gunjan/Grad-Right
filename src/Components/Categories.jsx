import React from "react";
import CategoryCard from "./CategoryCard";
import "../Styles/Categories.css";
import { categoriesData } from "../Constant/CategoriesData.js";

const Categories = () => {
  console.log(categoriesData);

  return (
    <div>

      {/* <CategoryCard data={categoriesData[0]}/> */}
     
      {categoriesData.map((category) => (
        <CategoryCard data={category} />
      ))}
    </div>
  );
};

export default Categories;
