import React from "react";
import s from "./Footer.module.css";
import Image from "next/image";
import Button from "../Button";
import Logo from "../Logo";

function Footer() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.innerContainer}>
          <div className={s.gridContainer}>
            <div className={s.center}>
              <div className={s.logoContainer}>
                <Image
                  src="/logo_white_2.png"
                  alt="hey logo"
                  layout="intrinsic"
                  height="600"
                  width="190"
                />
              </div>
              <div className="flex spacing-x-2 pt-8 pb-4">
                <div>I - 39010 Nals - Manteleweg 2</div>
                <div>+39 338 832 8978</div>
              </div>
              <a href="mail:info@ortus.bz.it" className="pt-2 pb-8 text-xl">
                info@ortus.bz.it
              </a>
              <Button className={s.btn} variant="ghost">
                Anfahrt
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 h-64 w-52 transform rotate-45 md:rotate-12 translate-x-1/2 translate-y-1/4 md:translate-x-12 md:bottom-auto md:top-0 md:w-64 md:h-72 md:translate-y-0">
          <Image
            src="/images/footer_grape.png"
            height="280"
            width="220"
            alt="background grape decoration"
          />
        </div>
      </div>
    </section>
  );
}

export default Footer;
