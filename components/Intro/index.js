import React from "react";
import s from "./Intro.module.css";
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
              <p className={s.p}>{intl.description}</p>
              <p className={s.text}>{intl.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
