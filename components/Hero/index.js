import React from "react";
import s from "./Hero.module.css";
import Image from "next/image";

function Hero({ imgUrl, width, height }) {
  return (
    <section className={s.section} data-aos="fade-up" data-aos-delay="350">
      <div className={s.container}>
        <div className={s.innerContainer}>
          <div className={s.gridContainer}>
            <div className={s.center}>
              <Image
                src={imgUrl || "/images/hero.png"}
                width={width || 1440}
                height={height || 808}
                layout="intrinsic"
                alt="Ortus Haus"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
