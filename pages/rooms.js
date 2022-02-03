import Link from "next/link";
import Events from "../components/Events";
import Layout from "../components/Layout";

import translations from "../data/home";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import Image from "next/image";

import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation]);

function Rooms({ slug, intl }) {
  const da = intl.rooms;

  return (
    <Layout title="Umgebung" intl={intl}>
      <div className="relative pt-12 pb-10 md:pt-24 md:pb-16 mb-8 sm:mb-0">
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
                src="/room/slider/kitchen.png"
                alt="Küche mit Blick auf die Terasse"
                width="1200"
                height="800"
              />
            )}
          </SwiperSlide>
          <SwiperSlide className="max-w-4xl">
            {({ isActive }) => (
              <Image
                className={`max-w-full h-auto ${
                  isActive ? "opacity-100" : "opacity-30"
                }`}
                src="/room/slider/living.png"
                alt="Küche mit Blick auf die Terasse"
                width="1200"
                height="800"
              />
            )}
          </SwiperSlide>
          <SwiperSlide className="max-w-4xl">
            {({ isActive }) => (
              <Image
                className={`max-w-full h-auto ${
                  isActive ? "opacity-100" : "opacity-30"
                }`}
                src="/room/slider/roomA.png"
                alt="Erstes Schlafzimmer"
                width="1200"
                height="800"
              />
            )}
          </SwiperSlide>
          <SwiperSlide className="max-w-4xl">
            {({ isActive }) => (
              <Image
                className={`max-w-full h-auto ${
                  isActive ? "opacity-100" : "opacity-30"
                }`}
                src="/room/slider/roomB.png"
                alt="Zweites Schlafzimmer"
                width="1200"
                height="800"
              />
            )}
          </SwiperSlide>
          <SwiperSlide className="max-w-4xl">
            {({ isActive }) => (
              <Image
                className={`max-w-full h-auto ${
                  isActive ? "opacity-100" : "opacity-30"
                }`}
                src="/room/slider/bath.png"
                alt="Badezimmer"
                width="1200"
                height="800"
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
      </div>
      <div className="grid items-center md:grid md:gap-12 md:grid-cols-12 lg:gap-20">
        <div className="col-span-10 md:col-start-2 md:col-span-10 flex flex-col justify-center items-center text-center">
          <h1
            className={"text-5xl font-serif text-gray-800"}
            data-aos="fade-down"
          >
            {da.title}
          </h1>
          <p
            className={
              "text-xl text-default max-w-prose pt-12 md:max-w-screen-md md:pt-8 md:text-gray-600"
            }
            dangerouslySetInnerHTML={{ __html: da.intro }}
          />
          <p
            className={
              "text-xl text-default max-w-prose pt-12 md:max-w-screen-md md:pt-8 md:text-gray-600"
            }
            dangerouslySetInnerHTML={{ __html: da.ammenities }}
          />
          <p
            className={
              "text-xl text-default max-w-prose pt-12 md:max-w-screen-md md:pt-8 md:text-gray-600"
            }
            dangerouslySetInnerHTML={{ __html: da.terrace }}
          />
          <p
            className={
              "text-xl text-default max-w-prose pt-12 md:max-w-screen-md md:pt-8 md:text-gray-600"
            }
            dangerouslySetInnerHTML={{ __html: da.ammenities2 }}
          />
          <p
            className={
              "text-xl text-default max-w-prose pt-12 md:max-w-screen-md md:pt-8 md:text-gray-600"
            }
            dangerouslySetInnerHTML={{ __html: da.extras }}
          />
          <p
            className={
              "text-xl text-default max-w-prose pt-12 md:max-w-screen-md md:pt-8 md:text-gray-600"
            }
            dangerouslySetInnerHTML={{ __html: da.extras2 }}
          />
          <h2 className="text-3xl font-serif text-secondary col-span-2 text-center pt-12">
            {da.price}
          </h2>
          <p
            className={
              "text-4xl text-default max-w-prose py-12 md:max-w-screen-md md:py-8 md:text-gray-600"
            }
          >
            {da.pricing}
          </p>
          <Link href="/request">
            <a className="bg-primary cursor-pointer py-4 px-6 inline-flex font-semibold text-center justify-center items-center text-primary border-primary transition ease-in-out duration-150 uppercase tracking-widest">
              {da.cta}
            </a>
          </Link>
        </div>
      </div>

      <Events exclude={slug} intl={intl.events} />

      <div className="grid items-center md:grid md:gap-12 md:grid-cols-12 lg:gap-20 pb-12">
        <div className="col-span-10 md:col-start-2 md:col-span-10 flex flex-col justify-center items-center text-center">
          <p
            className={
              "text-sm text-default max-w-prose pt-12 md:max-w-screen-md md:pt-8 md:text-gray-600"
            }
            dangerouslySetInnerHTML={{ __html: da.pricingInfo }}
          />
          <p
            className={
              "text-sm text-default max-w-prose pt-12 md:max-w-screen-md md:pt-8 md:text-gray-600"
            }
            dangerouslySetInnerHTML={{ __html: da.localTax }}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Rooms;

export async function getServerSideProps({ query, locale }) {
  const intl = translations[locale];

  return {
    props: {
      intl,
    }, // will be passed to the page component as props
  };
}
