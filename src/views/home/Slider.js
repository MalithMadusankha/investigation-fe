import React, { useState } from "react";
import SliderImage from "./SliderImage";

const Slider = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      src: "https://via.placeholder.com/600x400?text=Image+1",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://via.placeholder.com/600x400?text=Image+2",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "https://via.placeholder.com/600x400?text=Image+3",
      alt: "Image 3",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const length = images.length;

  const goToNextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  return (
    <div className="slider">
      <button className="previous-btn" onClick={goToPreviousSlide}>
        Previous
      </button>
      <button className="next-btn" onClick={goToNextSlide}>
        Next
      </button>
      <div className="slider-images">
        {images.map((image, index) => (
          <SliderImage
            key={image.id}
            src={image.src}
            alt={image.alt}
            index={index}
            currentIndex={currentIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
