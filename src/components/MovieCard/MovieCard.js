import React from "react";
import "./MovieCard.css";

const MovieCard = ({ src, title }) => {
  return (
    <div className="container_card">
      <img src={src} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default MovieCard;
