import { Swiper } from 'swiper/react'
import React from 'react';

export const Slider = ({ children, breakpoints, slidesPerView, style }) => {
    return (
        <Swiper
            className={`py-11 ${style}`}
            slidesPerView={slidesPerView}
            spaceBetween={100}
            loop={true}
            centeredSlides={true}
            breakpoints={breakpoints}
        >
            {children}
        </Swiper>
    )
}
