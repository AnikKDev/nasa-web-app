import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";
import './Carousel.css'
const Carousel = () => {
    const style = {
        lineHeight: "2em"
    }
    return (
        <>
            <Swiper
                effect={"fade"}
                rewind={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className=""
            >
                <SwiperSlide>
                    <div className='carousel-image-container1'>
                        <div className='p-10 md:ml-8 h-80  text-secondary   lg:w-1/2 '>
                            <h3 style={style} className="slider-texts my-6 lg:text-xl ">“Floods, droughts, heatwaves, extreme storms and wildfires are going from bad to worse, breaking records with alarming frequency. Heatwaves in Europe. Colossal floods in Pakistan. Prolonged and severe droughts in China, the Horn of Africa and the United States.</h3>

                            <p className='italic'>"There is nothing natural about the new scale of these disasters. They are the price of humanity’s fossil fuel addiction,”</p>
                            <p className='my-2'>- UN Secretary-General António Guterres.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='carousel-image-container3'>

                        <div className='p-10 md:ml-8 h-80  text-secondary   lg:w-1/2 '>
                            <h3 style={{ lineHeight: "2rem" }} className="my-6 lg:text-xl ">Polar ice caps are melting as global warming causes climate change. We lose Arctic sea ice at a rate of almost 13% per decade, and over the past 30 years, the oldest and thickest ice in the Arctic has declined by a stunning 95%.</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carousel-image-container4'>

                        <div className='p-10 md:ml-8 h-80  text-secondary   lg:w-1/2 '>
                            <h3 style={{ lineHeight: "2rem" }} className="my-6 lg:text-xl ">“When addressing air pollution, we also address a critical and easy-to-implement solution to climate change. Short-lived climate pollutants are negative in all senses, and we have proven technologies and policies to economically and immediately reduce air pollution,” <p className='my-2 italic'>- says UN Environment climate change specialist Niklas Hagelberg.</p></h3>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Carousel;