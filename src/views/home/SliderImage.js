import React from "react";

const SliderImage = ({ src, alt, index, currentIndex }) => {
  return (
    <img
      className={index === currentIndex ? "active" : "inactive"}
      src={src}
      alt={alt}
    />
  );
};

export default SliderImage;
