import React, { useState } from "react";
import "../Styles/Faq.css";
import { FaqData } from "../Constant/FaqData";
import FaqCard from "./FaqCard";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="full-box-container">
      <div className="top-heading">
        <h1>Frequently Asked Questions</h1>
      </div>
      {FaqData.map((data, index) => (
        <FaqCard
          key={index}
          data={data}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Faq;
