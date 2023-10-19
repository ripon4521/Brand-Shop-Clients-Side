import Slider1 from "./Slider1";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Banner from "../Home/Banner";


const BannerSlider = () => {
    return (
        <div className="bg-gray-100  h-[80vh]">
         
            <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slider1></Slider1></SwiperSlide>
        <SwiperSlide><Slider1></Slider1></SwiperSlide>
        <SwiperSlide><Slider1></Slider1></SwiperSlide>
       
      </Swiper>
    </>
        </div>
    );
};

export default BannerSlider;