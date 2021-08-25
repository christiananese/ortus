import React from "react";
import s from "./hero.module.css";

function Hero() {
  return (
    <section className={s.section} data-aos="fade-up" data-aos-delay="450">
      <div className={s.container}>
        <div className={s.innerContainer}>
          <div className={s.grid}>
            <div className={s.left}>
              <h1 className={s.h1 + " m-0 mb-4 lg:text-8xl"}>
                Your website, reimagined
              </h1>
              <p className="text-xl text-gray-600 ">
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </p>
              <form className="mt-8">
                <div className="flex flex-col justify-center mx-auto max-w-sm sm:flex-row sm:max-w-md md:ml-0 md:mr-0">
                  <input
                    type="tel"
                    className="w-full mb-2 sm:mb-0 sm:mr-2 outline-none rounded py-3 px-4 leading-5 bg-white border border-gray-300"
                    placeholder="Phone number"
                  />
                  <button className="px-8 py-3 bg-blue-500 flex-shrink-0 text-white outline-none font-medium border rounded inline-flex justify-center items-center leading-5 hover:bg-blue-400">
                    Request code
                  </button>
                </div>
              </form>
              <ul className={s.list}>
                <li className={s.listItem}>
                  <svg
                    className={s.check}
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                  </svg>
                  <span>Lorem ipsum is a placeholder text commonly</span>
                </li>
                <li className={s.listItem}>
                  <svg
                    className={s.check}
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                  </svg>
                  <span>Lorem ipsum is a placeholder text commonly</span>
                </li>
                <li className={s.listItem}>
                  <svg
                    className={s.check}
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                  </svg>
                  <span>Lorem ipsum is a placeholder text commonly</span>
                </li>
              </ul>
            </div>
            <div className={s.right}>
              <div className={s.imageContainer}>
                <svg
                  className={s.imageSvg}
                  aria-hidden="true"
                  width="678"
                  height="634"
                  viewBox="0 0 678 634"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="240"
                    cy="394"
                    r="240"
                    fill="url(#piphoneill_paint0_radial)"
                    fillOpacity=".4"
                  ></circle>
                  <circle
                    cx="438"
                    cy="240"
                    r="240"
                    fill="url(#piphoneill_paint1_radial)"
                    fillOpacity=".6"
                  ></circle>
                  <defs>
                    <radialGradient
                      id="piphoneill_paint0_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="rotate(90 -77 317) scale(189.054)"
                    >
                      <stop stopColor="#667EEA"></stop>
                      <stop
                        offset="1"
                        stopColor="#667EEA"
                        stopOpacity=".01"
                      ></stop>
                    </radialGradient>
                    <radialGradient
                      id="piphoneill_paint1_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="rotate(90 99 339) scale(189.054)"
                    >
                      <stop stopColor="#9F7AEA"></stop>
                      <stop
                        offset="1"
                        stopColor="#9F7AEA"
                        stopOpacity=".01"
                      ></stop>
                    </radialGradient>
                  </defs>
                </svg>
                <img
                  src="https://preview.cruip.com/appy/images/mockup-image-01.jpg"
                  alt=""
                  className="absolute border-solid block align-middle h-auto"
                  style={{ maxWidth: "84.33%" }}
                  width="290"
                  height="624"
                />
                <img
                  src="https://preview.cruip.com/appy/images/iphone-mockup.png"
                  alt=""
                  className="border-solid block align-middle h-auto mx-auto max-w-full pointer-events-none relative md:mr-0 md:max-w-none"
                  width="344"
                  height="674"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
