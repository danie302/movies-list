import PropTypes from 'prop-types';
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
import CarrouselItem from "./CarrouselItem/CarrouselItem";


SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

const Carrousel = (props) => {  

  const {items:moviesArray, conf} = props;
  const slides = [];  
 
  if (moviesArray) {
    moviesArray.forEach((movie) => {
      slides.push(
        <SwiperSlide key={movie.id}>
          <CarrouselItem
            movieTitle={movie.title}
            movieImagePath={
              conf.images.base_url +
              conf.images.poster_sizes[4] +
              movie.poster_path
            }
          />
        </SwiperSlide>
      );
    });
  }    
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

Carrousel.propTypes={
  items: PropTypes.array,
  conf: PropTypes.object
}

export default Carrousel;
