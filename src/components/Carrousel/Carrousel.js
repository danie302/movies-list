import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carrousel.css";
import {
  getConfiguration,
  getPopularMovies,
} from "../../services/moviesService";
import CarrouselItem from "./CarrouselItem/CarrouselItem";

SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

const Carrousel = () => {
  const [popularMovies, setPopularMovies] = useState({
    movies: {},
    conf: {},
  });
  const moviesArray = popularMovies.movies?.results;
  const slides = [];
  if (moviesArray) {
    moviesArray.forEach((movie) => {
      slides.push(
        <SwiperSlide key={movie.id}>
          <CarrouselItem
            movieTitle={movie.title}
            movieImagePath={
              popularMovies.conf.images.base_url +
              popularMovies.conf.images.backdrop_sizes[1] +
              movie.backdrop_path
            }
          />
        </SwiperSlide>
      );
    });
  }
  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getPopularMovies();
      const conf = await getConfiguration();
      const data = {
        movies,
        conf,
      };
      setPopularMovies(data);
    };
    fetchMovies().catch((error) => error);
  }, []);
  return (
    <section id="carrousel">
      <h2>Movies List</h2>

      {moviesArray && (
        <Swiper
          id="main_swiper"
          navigation={true}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={window.innerWidth < 768 ? 1 : 4}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="my-swiper"
        >
          {slides}
        </Swiper>
      )}
    </section>
  );
};

export default Carrousel;
