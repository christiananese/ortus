import React from "react";
import s from "./Intro.module.css";
import Image from "next/image";
import Button from "../Button";

function Intro() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.innerContainer}>
          <div className={s.gridContainer}>
            <div className={s.center}>
              <h1 className={s.title}>Unser Neuanfang</h1>
              <p className={s.p}>
                Im Jahr 2019 haben wir unseren Hof Ortus fertiggestellt und uns
                so einen langersehnten Traum verwirklicht. Das Haus wurde als
                KlimaHaus Nature errichtet, ein Haus, das die moderne
                Architektur mit der schlichten Erhabenheit der Natur verbindet.
                Wichtig waren uns dabei die Energieeffizienz, die Nachhaltigkeit
                und Natürlichkeit der Baumaterialien, um ein angenehmes und
                gesundes Raumklima zu schaffen - Voraussetzung für das
                Wohlbefinden und die Gesundheit seiner Bewohner.{" "}
              </p>
              <Button className={s.btn}>Mehr dazu</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
