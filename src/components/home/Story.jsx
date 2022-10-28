import React, { useState } from 'react';
import {SlArrowLeft, SlArrowRight} from 'react-icons/sl'
import Slider from "react-slick";
import { products } from '../assets/data/data';
import Heading from '../common/Heading';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Story(props) {
    const [data, setData] = useState(products)

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <button class="slick-next" aria-label="Next" type="button" >
                <SlArrowRight/>
            </button>
        );
    }
      
    function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button class="slick-prev" aria-label="Previous" type="button" >
            <SlArrowLeft/>
        </button>
    );
    }
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        cssEase: "linear",
        prevArrow: <SamplePrevArrow/>,
        nextArrow: <SampleNextArrow/>
    }

    return (
        <>
            <section className="storyslider" id='storyslider'>
                <Heading title='' desc='Check out the hottest design of the week. These rising stars are worth your attention.'/>
                <Slider {...settings}>
                    {data.slice(0,5).map((item) => (
                        <div className="photo" key={item.id}>
                            <img src={item.cover} alt="" />
                        </div>
                    ))}
                </Slider>
            </section>
        </>
    );
}

export default Story;