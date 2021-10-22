import React from "react";
import s from "./Events.module.css";
import EventCard from "./EventCard";

function Events({ exclude, intl, showAll }) {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.innerContainer}>
          <div className={s.gridContainer}>
            <div className={s.center}>
              {(showAll || exclude != "trautmannsdorf") && (
                <EventCard
                  title={intl.trautmannsdorf.cardTitle}
                  description={intl.trautmannsdorf.excerpt}
                  img="/slider/tinified/trauti.jpg"
                  link="/surroundings/trautmannsdorf"
                />
              )}
              {(showAll || exclude != "nals") && (
                <EventCard
                  title={intl.nals.cardTitle}
                  description={intl.nals.excerpt}
                  img="/slider/tinified/haus.png"
                  link="/surroundings/nals"
                />
              )}
              {(showAll || exclude != "naturbad-gargazon") && (
                <EventCard
                  title={intl["naturbad-gargazon"].cardTitle}
                  description={intl["naturbad-gargazon"].excerpt}
                  img="/slider/tinified/rose.jpg"
                  link="/surroundings/naturbad-gargazon"
                />
              )}
              {(showAll || (!!exclude && exclude != "knottenkino")) && (
                <EventCard
                  title={intl.knottenkino.cardTitle}
                  description={intl.knottenkino.excerpt}
                  img={intl.knottenkino.hero.path}
                  link="/surroundings/knottenkino"
                />
              )}
              {showAll && (
                <EventCard
                  title={intl["schloss-tirol"].cardTitle}
                  description={intl["schloss-tirol"].excerpt}
                  img={intl["schloss-tirol"].hero.path}
                  link="/surroundings/schloss-tirol"
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
