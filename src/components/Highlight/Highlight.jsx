import React, { useState } from "react";
import "./Highlight.css";

import rightArrow from "../../assets/highlight arrow/right.png";
import leftArrow from "../../assets/highlight arrow/left.png";

function Highlight({ slider }) {
  const [slideImage, setSlideImage] = useState(0);
  const visibleImages = 2; // always 2, regardless of screen size

  const nextSlide = () => {
    setSlideImage((prev) => {
      if (prev < slider.length - visibleImages) {
        return prev + 1;
      }
      return prev;
    });
  };

  const prevSlide = () => {
    setSlideImage((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <div className="image-slider">
      <div className="box1">
        <h2>Experience Highlights</h2>
        <div>
          <img
            onClick={prevSlide}
            className={`arrow ${slideImage === 0 ? "disabled" : ""}`}
            src={leftArrow}
            alt="left arrow"
          />
          <img
            onClick={nextSlide}
            className={`arrow ${
              slideImage >= slider.length - visibleImages ? "disabled" : ""
            }`}
            src={rightArrow}
            alt="right arrow"
          />
        </div>
      </div>

      <div className="box2">
        {slider.map((item, index) => {
          return (
            <img
              key={index}
              src={item.path}
              alt={item.name}
              style={{
                display:
                  index >= slideImage && index < slideImage + visibleImages
                    ? "block"
                    : "none",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Highlight;
