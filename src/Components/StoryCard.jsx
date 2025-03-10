import React from "react";
import "../styles/Stories.css";


const StoryCard = ({ story, isExpanded, onClick }) => {
  return (
    <div className={`story-card ${isExpanded ? "expanded" : ""}`} onClick={onClick}>
      {!isExpanded && <div className="icon">{story.icon === "quote" ? "❝" : "▶"}</div>}
      
      {isExpanded ? (
        <div className="expanded-content">
          <p className="quote">{story.quote}</p>
          <div className="profile">
            <img src={story.image} alt={story.name} className="profile-img" />
            <div>
              <p className="name">{story.name}</p>
              <p className="university">{story.university}</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <img src={story.image} alt={story.name} className="profile-img" />
          <p className="name">{story.name}</p>
          <p className="university">{story.university}</p>
        </>
      )}
    </div>
  );
};

export default StoryCard;