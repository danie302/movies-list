import React from "react";
import Carrousel from "../Carrousel/Carrousel";
import "./MovieDetail.css";
const MovieDetail = (props) => {
  console.log(props.movie);
  const { images, movie } = props;
  const { genres } = movie;
  const castArray = props.cast.cast;
  return (
    <div className="container-details">
      <div className="container-details-poster">
        <img
          src={images.base_url + images.poster_sizes[4] + movie.poster_path}
          alt={movie.title}
        />
        <span>{movie.tagline}</span>
        <span>{movie.vote_average}</span>
      </div>
      <div className="container-movie-info">
        <h2>{movie.title}</h2>
        {genres.map((genre, i) => (
          <span className="genres-item" key={i}>
            {genre.name}
          </span>
        ))}
        <p>{movie.overview}</p>
        {
          <Carrousel
            items={castArray}
            conf={images}
            path={"profile_path"}
            loop={false}
            effect={""}
            autoplay={false}
            className={"swiper-slide-cast"}
            pagination={false}
            classNameSwiper={"swiper-cast"}
          />
        }
      </div>
    </div>
  );
};

export default MovieDetail;
