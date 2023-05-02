import React from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import SliderCard from '../cards/SliderCard';

SwiperCore.use([Autoplay]);

export default function HomeSlider({ media }) {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      navigation={false}
      pagination={false}
      className='mb-6'
    >
      {media.map((curr) => (
        <SwiperSlide key={curr.id}>
          <SliderCard
            bannerImage={curr.bannerImage}
            title={curr.title}
            genres={curr.genres}
            description={curr.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
