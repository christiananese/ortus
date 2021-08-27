import React from "react";
import s from "./slider.module.css";
import SliderComponent from "../../components/Slider/Slider";

function Slider() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.innerContainer}>
          <div className="relative">

          <SliderComponent />
          </div>
          <div className={s.innerText}>
            <h2 className={s.title}>
              From rough design files, to powerful products
            </h2>
            <p className={s.p}>
              Auf unserem Hof leben mehrere Generationen. Wir sind der
              Überzeugung, dass diese Symbiose zwischen Jung und Alt, zwischen
              Vergangenheit und Zukunft die Gegenwart bereichert und möchten das
              Gefühl eines Mehrgenerationenurlaubes auch unseren Gästen mit
              unseren 2 Ferienwohnungen ermöglichen, welche den
              unterschiedlichen Bedürfnissen ihrer Bewohner gerecht werden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
