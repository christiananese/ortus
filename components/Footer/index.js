import React from "react";
import s from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const ROTER_HAHN = {
  de: "https://www.roterhahn.it/de/urlaub-auf-dem-bauernhof-in-suedtirol/ferienwohnungen-und-zimmer/bauernhof-urlaub/ortus-nals+5850.html",
  it: "https://www.gallorosso.it/it/agriturismo-in-alto-adige/appartamenti-e-camere-in-alto-adige/maso/ortus-nalles+5850.html",
  en: "https://www.redrooster.it/en/farm-holidays-in-south-tyrol/holiday-flats-in-south-tyrol/detail/ortus-nals+5850.html",
};

function Footer({ intl, locale }) {
  const linkText = intl.links.aboutUs;
  const da = intl?.footer;
  const hahn_link = ROTER_HAHN[locale] || ROTER_HAHN["de"];

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
                <div>{da.address}</div>
              </div>
              <a
                href="tel:+393388328978"
                className="pt-2 text-xl hover:underline"
              >
                +39 338 8328978
              </a>
              <a
                href="mail:info@ortus.bz.it"
                className="pt-4 pb-8 text-xl hover:underline"
              >
                info@ortus.bz.it
              </a>
              <Link href={linkText} target="_blank" rel="noopener">
                <a className={s.btn}>{da.route}</a>
              </Link>
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
              <Link href="/imprint">{da.imprint}</Link>
            </li>
            <li className="px-2">
              <Link href="/privacy">{da.privacy}</Link>
            </li>
            {/* <li className="px-2">
              <Link href="/">{intl.cookies}</Link>
            </li> */}
            <li className="px-2">{da.vatId}</li>
          </ul>
        </nav>
      </div>
      <div className="w-full grid grid-cols-2 gap-4 items-center justify-between max-w-[180px] mx-auto py-4 pb-24 md:pb-0">
        <Image
          src="/s_tirol.png"
          height="331"
          width="440"
          alt="Suedtirol Dachmarke logo"
        />
        <Link href={hahn_link} rel="noopener">
          <a target="_blank">
            <Image
              src="https://www.roterhahn.it/img/logo_roter_hahn.gif"
              height="90"
              width="90"
              alt="Suedtirol Dachmarke logo"
            />
          </a>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
