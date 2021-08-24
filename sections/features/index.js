import React from "react";
import s from "./features.module.css";

function Features() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.innerContainer}>
          <div className={s.gridContainer}>
            <div className={s.gridItem}>
              <div className="font-extrabold text-4xl mb-1">2.4M</div>
              <div className="text-gray-600">Days turn around</div>
            </div>
            <div className={s.gridItem}>
              <div className="font-extrabold text-4xl mb-1">2.4M</div>
              <div className="text-gray-600">Days turn around</div>
            </div>
            <div className={s.gridItem}>
              <div className="font-extrabold text-4xl mb-1">2.4M</div>
              <div className="text-gray-600">Days turn around</div>
            </div>
            <div className={s.gridItem}>
              <div className="font-extrabold text-4xl mb-1">2.4M</div>
              <div className="text-gray-600">Days turn around</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
