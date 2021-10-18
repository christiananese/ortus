import React from "react";
import s from "./slider.module.css";
import SliderComponent from "../../components/Slider/Slider";
import Button from "../../components/Button";
import Link from "next/link";

function Slider({ intl }) {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.innerContainer}>
          <div className="relative">
            <SliderComponent />
          </div>
          <div className={s.innerText}>
            <h2 className={s.title}>{intl.title}</h2>
            <p className={s.p}>{intl.text}</p>

            <Link href={"/rooms"}>
              <a className={s.btn}>{intl.button}</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
