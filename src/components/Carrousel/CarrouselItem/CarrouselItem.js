import React from "react";
import './CarrouselItem.css'

const CarrouselItem = (props) => {
  return (
    <React.Fragment>
      <img className={props.className} src={props.imagePath} alt={props.imageTitle} />
      <p>{props.name}</p>

    </React.Fragment>
  )
};

export default CarrouselItem;
