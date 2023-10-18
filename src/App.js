import React, { useState } from "react";
import "./index.css";
const App = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <>
    <span className="star-header">Star Rating</span>
    <div className="star-wrapper">
    {[...Array(5)].map((star, index) => {
      index += 1;
      return (
        <button
          key={index}
          type="button"
          onClick={() => setRating(index)}
          className={index <= (hover || rating) ? "on" : "off"}
          onMouseLeave={() => setHover(index)}
          onMouseEnter={() => setHover(index)}
        >
          <span className="star">&#9733;</span>
        </button>
      );
    })}
  </div>
    </>
    
  );
};

export default App;
