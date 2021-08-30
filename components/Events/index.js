import React from "react";
import s from "./Events.module.css";
import Image from "next/image";
import Button from "../Button";
import EventCard from "./EventCard";

function Events() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.innerContainer}>
          <div className={s.gridContainer}>
            <div className={s.center}>
              <EventCard
                title={"Trautmannsdorf"}
                img="/slider/tinified/haus.png"
                description="Ausblick auf Meran"
                link="/trautmannsdorf"
              />
              <EventCard
                title={"ola"}
                img="/slider/tinified/haus.png"
                description="Bisch du geil und hosch dorweil?"
                link="/trautmannsdorf"
              />
              <EventCard
                title={"ola"}
                img="/slider/tinified/haus.png"
                description="Bisch du geil und hosch dorweil?"
                link="/trautmannsdorf"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
