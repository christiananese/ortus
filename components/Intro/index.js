import React from "react";
import s from "./Intro.module.css";
import Button from "../Button";

function Intro({ intl }) {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.innerContainer}>
          <div className={s.gridContainer}>
            <div className={s.center}>
              <h1 className={s.title} data-aos="fade-down">
                {intl.title}
              </h1>
              <p className={s.p} data-aos="fade-down" data-aos-delay="300">
                {intl.description}
              </p>
              <Button
                className={s.btn}
                data-aos="fade-down"
                data-aos-delay="300"
              >
                {intl.button}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
