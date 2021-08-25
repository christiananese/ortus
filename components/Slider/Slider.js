import React from "react";
import s from "./slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/swiper-bundle.min.css";

function Slider() {
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={"auto"}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      centeredSlides={true}
      loop={true}
      className="overflow-visible"
    >
      <SwiperSlide className="max-w-lg">
        {({ isActive }) => (
          <>
            <Image
              className={`max-w-full h-auto ${
                isActive ? "opacity-100" : "opacity-30"
              }`}
              src="https://preview.cruip.com/appy/images/carousel-item-01.jpg"
              width="540"
              height="460"
              alt="hey ho"
            />
            <div className="absolute inset-0 flex flex-col transform-gpu">
              <div
                className={`flex flex-grow ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                <a
                  href="#topnav"
                  className="bg-blue-500 hover:bg-blue-400 py-2 px-4 inline-flex self-center mx-auto text-white outline-none rounded"
                >
                  Learn more
                </a>
              </div>
            </div>
          </>
        )}
      </SwiperSlide>
      <SwiperSlide className="max-w-lg">
        {({ isActive }) => (
          <Image
            className={`max-w-full h-auto ${
              isActive ? "opacity-100" : "opacity-30"
            }`}
            src="https://preview.cruip.com/appy/images/carousel-item-01.jpg"
            width="540"
            height="460"
            alt="Da fuck"
          />
        )}
      </SwiperSlide>
      <SwiperSlide className="max-w-lg">
        {({ isActive }) => (
          <Image
            className={`max-w-full h-auto ${
              isActive ? "opacity-100" : "opacity-30"
            }`}
            src="https://preview.cruip.com/appy/images/carousel-item-01.jpg"
            width="540"
            height="460"
            alt="Carousel image"
          />
        )}
      </SwiperSlide>
      <SwiperSlide className="max-w-lg">
        {({ isActive }) => (
          <Image
            className={`max-w-full h-auto ${
              isActive ? "opacity-100" : "opacity-30"
            }`}
            src="https://preview.cruip.com/appy/images/carousel-item-01.jpg"
            width="540"
            height="460"
            alt="es laeuft"
          />
        )}
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
