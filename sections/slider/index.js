import React from "react";
import s from "./slider.module.css";
import SliderComponent from "../../components/Slider/Slider";

function Slider() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.textContainer}>
          <div className={s.innerText}>
            <h1 className={s.title}>
              From rough design files, to powerful products
            </h1>
            <p className={s.p}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat.
            </p>
          </div>
        </div>
        <SliderComponent />
      </div>
    </section>
  );
}

export default Slider;
