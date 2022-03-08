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
import React from 'react';


SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

const Carrousel = (props) => {  

  const {items, conf, path} = props;
  const slides = [];  
  console.log(conf);
  if (items) {
    items.forEach((item) => {
      slides.push(
        <SwiperSlide key={item.id}>
        <CarrouselItem
          imageTitle={item.title}            
          imagePath={
            conf.base_url +
            conf.logo_sizes[6] +
            item[path]
          }
        />
      </SwiperSlide>
      );
    });
  }    
  return (
    <React.Fragment>  

      {items && (
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
    </React.Fragment>
  );
};

Carrousel.propTypes={
  items: PropTypes.array,
  conf: PropTypes.object
}

export default Carrousel;
