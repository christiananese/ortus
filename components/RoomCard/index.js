import React from "react";
import s from "./RoomCard.module.css";
import Button from "../Button";
import Slider from "../Slider/Slider";

function RoomCard(props) {
  const { title, description, amenities, align } = props;

  return (
    <div className={s.section}>
      <div className={s.container}>
        <div className={s.innerContainer}>
          <div className={s.gridContainer}>
            <div className={s.roomHeader}>
              <h3 className={s.title} data-aos="fade-down">
                {title}
              </h3>
              <p className={s.p} data-aos="fade-down" data-aos-delay="300">
                {description}
              </p>
            </div>
            <div className={s.roomSlider}>
              <Slider />
            </div>
            <div className={s.roomBody}>
              <div className="w-full px-6 max-w-5xl mb-12  text-left">
                <div className="w-full border-b border-primary flex justify-between">
                  <h4 className="text-xl mb-2">Ausstattung</h4>
                  <span>arrow</span>
                </div>
                <div className="w-full grid grid-cols-2 py-6">
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Amenities</li>
                    <li>Amenities</li>
                    <li>Amenities</li>
                  </ul>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Amenities</li>
                    <li>Amenities</li>
                    <li>Amenities</li>
                  </ul>
                </div>
              </div>
              <Button
                className={s.btn}
                data-aos="fade-down"
                data-aos-delay="300"
              >
                Anfragen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
