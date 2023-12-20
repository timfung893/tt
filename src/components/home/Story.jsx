import React, { useState } from 'react';
import {SlArrowLeft, SlArrowRight} from 'react-icons/sl'
import Slider from "react-slick";
import { products } from '../assets/data/data';
import Heading from '../common/Heading';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Story(props) {
    const [data, setData] = useState(products)

    const settings = {
        dots: true,
        fade:true,
        ladyLoad:true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        cssEase: "linear",
    }

    return (
        <>
            <section className="storyslider" id='storyslider' data-aos="fade">
                <Heading title='' desc='Mọi chuyện bắt đầu từ đây...'/>
                <Slider {...settings}>
                    {data.filter(item => item.id !== 7).slice(0,6).map((item) => (
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