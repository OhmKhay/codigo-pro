import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";

const MySlider = ({ gallery }) => {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: true,
        autoplay: true,
      };

    return (
        <div className="my_slider">
            <Slider {...settings}>
                {gallery&&gallery?.map((img, index) => {
                    return (
                       <div key={index} className="image_slide">
                            <img src={img.normal} />
                       </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default MySlider;
