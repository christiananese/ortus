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
                img="/slider/tinified/trauti.jpg"
                description="Ausblick auf Meran"
                link="/trautmannsdorf"
              />
              <EventCard
                title={"Umgebung"}
                img="/slider/tinified/haus.png"
                description="Nals und Umgebung"
                link="/surroundings"
              />
              <EventCard
                title={"ola"}
                img="/slider/tinified/rose.jpg"
                description="Naturbadclea"
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
