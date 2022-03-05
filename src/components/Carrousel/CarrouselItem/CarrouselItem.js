import React from "react";

const CarrouselItem = ({ movieImagePath, movieTitle }) => {
  return <img src={movieImagePath} alt={movieTitle} />;
};

export default CarrouselItem;
