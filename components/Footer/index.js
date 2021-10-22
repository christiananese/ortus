import React from "react";
import s from "./Footer.module.css";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
import { de } from "../../data/home";

function Footer({ intl }) {
  return (
    <footer className={s.section}>
      <div className={s.container}>
        <div className={s.innerContainer}>
          <div className={s.gridContainer}>
            <div className={s.center}>
              <div className={s.logoContainer}>
                <Image
                  src="/tinified/logo_pencil_white.png"
                  alt="hey logo"
                  layout="responsive"
                  width="461"
                  height="165"
                />
              </div>
              <div className="pt-8 pb-4">
                <div>{intl.address}</div>
              </div>
              <a
                href="tel:+39 338 832 8978"
                className="pt-2 text-xl hover:underline"
              >
                +39 338 832 8978
              </a>
              <a
                href="mail:info@ortus.bz.it"
                className="pt-4 pb-8 text-xl hover:underline"
              >
                info@ortus.bz.it
              </a>
              <Button
                className={s.btn}
                variant="ghost"
                Component="a"
                href="https://www.google.com/maps/place/Manteleweg,+2,+39010+Nals,+S%C3%BCdtirol/data=!4m2!3m1!1s0x4782977c8a8dd51f:0x5d639575cee3b575?sa=X&ved=2ahUKEwiI7uTi_8vyAhWFzKQKHZmDCDoQ8gF6BAgLEAE"
                target="_blank"
                rel="noopener"
              >
                {intl.route}
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
        <nav className="flex w-full items-center md:pb-8">
          <ul className="flex flex-wrap mx-auto text-center justify-center">
            <li className="px-2">
              <Link href="/imprint">{intl.imprint}</Link>
            </li>
            <li className="px-2">
              <Link href="/privacy">{intl.privacy}</Link>
            </li>
            <li className="px-2">
              <Link href="/">{intl.cookies}</Link>
            </li>
            <li className="px-2">{intl.vatId}</li>
          </ul>
        </nav>
      </div>
      <div className="w-full flex items-center justify-center max-w-[80px] mx-auto py-4">
        <Image
          src="/s_tirol.png"
          height="331"
          width="440"
          alt="Suedtirol Dachmarke logo"
        />
      </div>
    </footer>
  );
}

export default Footer;
