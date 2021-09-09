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
                description="Die weltbekannten Gärten von Schloss Trautmannsdorf"
                link="/surroundings/trautmannsdorf"
              />
              <EventCard
                title={"Nals und Umgebung"}
                img="/slider/tinified/haus.png"
                description="Nals und Umgebung"
                link="/surroundings"
              />
              <EventCard
                title={"Naturbad Gargazon"}
                img="/slider/tinified/rose.jpg"
                description="Eintauchen und genießen im Naturbad Gargazon"
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
