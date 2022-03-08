import React from "react";

const CarrouselItem = ({ imagePath, imageTitle }) => {
  return <img src={imagePath} alt={imageTitle} />;
};

export default CarrouselItem;
