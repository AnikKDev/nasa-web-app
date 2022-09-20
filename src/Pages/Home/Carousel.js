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
    return (
        <>
            <Swiper
                rewind={true}
                effect={"fade"}
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
                            <h1 className="sm:text-3xl lg:text-6xl">MEOWWWWW!!!</h1>
                            <p className="my-10 leading-8 lg:text-xl">“Floods, droughts, heatwaves, extreme storms and wildfires are going from bad to worse, breaking records with alarming frequency. Heatwaves in Europe. Colossal floods in Pakistan. Prolonged and severe droughts in China, the Horn of Africa and the United States.</p>

                            <p className='italic'>"There is nothing natural about the new scale of these disasters. They are the price of humanity’s fossil fuel addiction,”</p>
                            <p className='my-2'>- UN Secretary-General António Guterres.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carousel-image-container2'>
                        <div className='p-10 md:ml-8 h-80  text-secondary   lg:w-1/2 '>
                            <h1 className="sm:text-3xl lg:text-6xl">MEOWWWWW!!!</h1>
                            <p className="my-10 leading-8 lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem, ratione quaerat, iste dolor harum, esse laudantium autem consequuntur dolorem consequatur labore enim deleniti nesciunt totam cum. Enim, earum impedit!</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carousel-image-container3'>

                        <div className='p-10 md:ml-8 h-80  text-secondary   lg:w-1/2 '>
                            <h1 className="sm:text-3xl lg:text-6xl">MEOWWWWW!!!</h1>
                            <p className="my-10 leading-8 lg:text-xl">Polar ice caps are melting as global warming causes climate change. We lose Arctic sea ice at a rate of almost 13% per decade, and over the past 30 years, the oldest and thickest ice in the Arctic has declined by a stunning 95%.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carousel-image-container4'>

                        <div className='p-10 md:ml-8 h-80  text-secondary   lg:w-1/2 '>
                            <h1 className="sm:text-3xl lg:text-6xl">MEOWWWWW!!!</h1>
                            <p className="my-10 leading-8 lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem, ratione quaerat, iste dolor harum, esse laudantium autem consequuntur dolorem consequatur labore enim deleniti nesciunt totam cum. Enim, earum impedit!</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Carousel;