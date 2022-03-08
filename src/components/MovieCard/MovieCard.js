import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ id,src, title,conf }) => {
  return (
    <div className="container_card">
      <Link to={`/movie/${id}`} state={{images:conf.images}}>
        <img src={src} alt={title} />      
      </Link>
      <p>{title}</p>
    </div>
  );
};

export default MovieCard;
