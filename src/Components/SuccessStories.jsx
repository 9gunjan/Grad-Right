import React, { useState } from "react";
import StoryCard from "./StoryCard";
import "../styles/Stories.css";
import { stories } from "../Constant/stories";

const SuccessStories = () => {
  const [expandedId, setExpandedId] = useState(1);

  

  const handleCardClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="success-stories">
      <h2 className="title">Success Stories</h2>
      <div className="stories-container">
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            story={story}
            isExpanded={expandedId === story.id} 
            onClick={() => handleCardClick(story.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;