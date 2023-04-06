import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CardCarousels = ({children}) => {
    var settings = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:3000
      };
      return (
        <div className="container row">
            
        <Slider {...settings} style={{width: '100%' , padding: '20px'}} >
          {children}
        </Slider>
        </div>
  )
}

export default CardCarousels