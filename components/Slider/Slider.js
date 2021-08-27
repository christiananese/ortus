import React from "react";
import s from "./slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import Image from "next/image";

import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation]);
function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={24}
        slidesPerView={"auto"}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        centeredSlides={true}
        loop={true}
        className="overflow-visible"
        navigation={{
          prevEl: ".prev-arrow",
          nextEl: ".next-arrow",
        }}
      >
        <SwiperSlide className="max-w-4xl">
          {({ isActive }) => (
            <>
              <Image
                className={`max-w-full h-auto ${
                  isActive ? "opacity-100" : "opacity-30"
                }`}
                src="/slider/tinified/haus.png"
                width="1200"
                height="800"
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
        <SwiperSlide className="max-w-4xl">
          {({ isActive }) => (
            <Image
              className={`max-w-full h-auto ${
                isActive ? "opacity-100" : "opacity-30"
              }`}
              src="/slider/tinified/traktor.png"
              width="1200"
              height="800"
              alt="Da fuck"
            />
          )}
        </SwiperSlide>
        <SwiperSlide className="max-w-4xl">
          {({ isActive }) => (
            <Image
              className={`max-w-full h-auto ${
                isActive ? "opacity-100" : "opacity-30"
              }`}
              src="/slider/tinified/knotten.png"
              width="1200"
              height="800"
              alt="Carousel image"
            />
          )}
        </SwiperSlide>
        <SwiperSlide className="max-w-4xl">
          {({ isActive }) => (
            <Image
              className={`max-w-full h-auto ${
                isActive ? "opacity-100" : "opacity-30"
              }`}
              src="/slider/tinified/katze.png"
              width="1200"
              height="800"
              alt="es laeuft"
            />
          )}
        </SwiperSlide>
      </Swiper>
      <div className="flex w-full justify-between text-white max-w-[960px] mx-auto absolute left-0 right-0 top-1/3 z-10">
        <div className="p-4 flex items-center justify-center bg-primary rounded prev-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
        <div className="p-4 flex items-center justify-center bg-primary rounded next-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Slider;
