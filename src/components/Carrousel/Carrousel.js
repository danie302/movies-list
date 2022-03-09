import PropTypes from "prop-types";
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
import React from "react";

SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

const Carrousel = (props) => {
  const {
    items,
    conf,
    effect,
    loop,
    path,
    autoplay,
    className,
    pagination,
    classNameSwiper,
  } = props;

  const slides = [];
  if (items) {
    items.forEach((item) => {
      slides.push(
        <SwiperSlide key={item.id} className={className}>
          <CarrouselItem
            imageTitle={item.title}
            imagePath={conf.base_url + conf.logo_sizes[6] + item[path]}
            name={item?.name}
            className={item?.name ? 'img-cast': 'img-popular'}
          />
        </SwiperSlide>
      );
    });
  }
  return (
    <React.Fragment>
      {items && (
        <Swiper
          navigation={true}
          effect={effect}
          centeredSlides={false}
          slidesPerView={"auto"}
          loop={loop}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={pagination}
          autoplay={autoplay}
          className={classNameSwiper}
        >
          {slides}
        </Swiper>
      )}
    </React.Fragment>
  );
};

Carrousel.propTypes = {
  items: PropTypes.array,
  conf: PropTypes.object,
};

export default Carrousel;
