import React from "react";
import Slider from "react-slick";
import NewsItemsInVertical from "./NewsItemsInVertical";
function Carousel() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <NewsItemsInVertical />
        <NewsItemsInVertical />
        <NewsItemsInVertical />
        <NewsItemsInVertical />
        <NewsItemsInVertical />
        <NewsItemsInVertical />
        <NewsItemsInVertical />
        <NewsItemsInVertical />
      </Slider>
    </div>
  );
}

export default Carousel;
