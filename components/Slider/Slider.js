import React from "react";
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
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        className="overflow-visible"
        navigation={{
          prevEl: ".prev-arrow",
          nextEl: ".next-arrow",
        }}
      >
        <SwiperSlide className="max-w-4xl">
          {({ isActive }) => (
            <Image
              className={`max-w-full h-auto ${
                isActive ? "opacity-100" : "opacity-30"
              }`}
              src="/slider/tinified/haus.png"
              width="1200"
              height="800"
              alt="Haus Frontansicht"
            />
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
              alt="Traktor"
            />
          )}
        </SwiperSlide>
        <SwiperSlide className="max-w-4xl">
          {({ isActive }) => (
            <Image
              className={`max-w-full h-auto ${
                isActive ? "opacity-100" : "opacity-30"
              }`}
              src="/slider/tinified/haus2.png"
              width="1200"
              height="800"
              alt="Haus Seitenansicht mit Blick aufs Schloss"
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
              alt="Unsere Hauskatze"
            />
          )}
        </SwiperSlide><SwiperSlide className="max-w-md">
          {({ isActive }) => (
            <Image
              className={`max-w-full h-auto ${
                isActive ? "opacity-100" : "opacity-30"
              }`}
              src="/slider/tinified/winter.png"
              width="600"
              height="800"
              alt="Winter"
            />
          )}
        </SwiperSlide>
        <SwiperSlide className="max-w-4xl">
          {({ isActive }) => (
            <Image
              className={`max-w-full h-auto ${
                isActive ? "opacity-100" : "opacity-30"
              }`}
              src="/slider/tinified/image1.png"
              width="1200"
              height="800"
              alt="Drohne"
            />
          )}
        </SwiperSlide>
        <SwiperSlide className="max-w-4xl">
          {({ isActive }) => (
            <Image
              className={`max-w-full h-auto ${
                isActive ? "opacity-100" : "opacity-30"
              }`}
              src="/slider/tinified/image2.png"
              width="1200"
              height="800"
              alt="Drohne 2"
            />
          )}
        </SwiperSlide>
      </Swiper>
      <div className="flex w-full justify-end sm:justify-between text-white max-w-[960px] mx-auto absolute left-0 right-0 bottom-0 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2 z-10">
        <div className="mr-4 sm:mr-0 sm:ml-2 md:ml-0 p-3 md:p-4 flex items-center justify-center bg-primary prev-arrow cursor-pointer">
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
        <div className="mr-4 sm:mr-2  md:mr-0 p-3 md:p-4 flex items-center justify-center bg-primary next-arrow cursor-pointer">
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
