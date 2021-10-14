import React from "react";
import s from "./Events.module.css";
import EventCard from "./EventCard";

function Events({ exclude, intl }) {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.innerContainer}>
          <div className={s.gridContainer}>
            <div className={s.center}>
              {exclude != "trautmannsdorf" && (
                <EventCard
                  title={intl.trautmannsdorf.title}
                  description={intl.trautmannsdorf.excerpt}
                  img="/slider/tinified/trauti.jpg"
                  link="/surroundings/trautmannsdorf"
                />
              )}
              {exclude != "nals" && (
                <EventCard
                  title={intl.nals.title}
                  description={intl.nals.excerpt}
                  img="/slider/tinified/haus.png"
                  link="/surroundings/nals"
                />
              )}
              {exclude != "naturbad-gargazon" && (
                <EventCard
                  title={intl["naturbad-gargazon"].title}
                  description={intl["naturbad-gargazon"].excerpt}
                  img="/slider/tinified/rose.jpg"
                  link="/surroundings/naturbad-gargazon"
                />
              )}
              {!!exclude && exclude != "knottenkino" && (
                <EventCard
                  title={intl.knottenkino.title}
                  description={intl.knottenkino.excerpt}
                  img={intl.knottenkino.hero.path}
                  link="/surroundings/knottenkino"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
