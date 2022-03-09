import React from "react";
import Carrousel from "../Carrousel/Carrousel";
import './MovieDetail.css'
const MovieDetail = (props) => {
  
  const castArray = props.cast.cast;
  return (
    <div className="container-details">
      <div className="container-details-img">
        <img
          src={
            props.images.base_url +
            props.images.poster_sizes[4] +
            props.movie.poster_path
          }
          alt={props.movie.title}
        />
      </div>
      <div className="container-movie-info">
        <h2>{props.movie.title}</h2>
        <p>{props.movie.overview}</p>
        {
          <Carrousel
            items={castArray}
            conf={props.images}
            path={"profile_path"}
            effect={""}
            autoplay={false}
            className={'swiper-slide-cast'}
          />
        }
      </div>
    </div>
  );
};

export default MovieDetail;
