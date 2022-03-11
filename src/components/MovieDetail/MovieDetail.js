import React from "react";
import Carrousel from "../Carrousel/Carrousel";
import "./MovieDetail.css";
import EventIcon from "@mui/icons-material/Event";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { yellow } from "@mui/material/colors";
const MovieDetail = (props) => {
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
        <span>{movie?.tagline}</span>
        <div className="container-details-poster-icons">
          <div className="star">
            <StarBorderIcon sx={{ color: yellow[500] }} fontSize="small" />
            <span>{movie?.vote_average}</span>
          </div>
          <div className="date">
            <EventIcon fontSize="small" />
            <span>{movie?.release_date}</span>
          </div>
        </div>
      </div>
      <div className="container-movie-info">
          <div className="container-movie-info__header">
            <h2>{movie.title}</h2>
            <div className="div-genres">
              {genres.map((genre, i) => (
                <span className="genres-item" key={i}>
                  {genre.name}
                </span>
              ))}
            </div>
            <p>{movie.overview}</p>
          </div>
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
