import React from "react";
import Button from "../Button";
import Logo from "../Logo";
import s from "./Navigation.module.css";
import Link from "next/link";
import Image from "next/image";

function Navigation() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.innerContainer}>
          <div className={s.center}>
            <ul className={s.left}>
              <li>
                <Link href="/">
                  <a className="text-default hover:text-primary-hover flex-shrink-0 uppercase leading-8 font-medium tracking-wide">
                    Über uns
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/rooms">
                  <a className="text-default hover:text-primary-hover uppercase leading-8 font-medium tracking-wide">
                    Wohnungen
                  </a>
                </Link>
              </li>
            </ul>
            <div className={s.logoContainer}>
              <Image
                src="/ortus_logo.svg"
                alt="hey logo"
                className="max-h-16"
                layout="intrinsic"
                width="210"
                height="100"
              />
            </div>
            <ul className={s.left}>
              <li>
                <Link href="/">
                  <a className="text-default hover:text-primary-hover uppercase leading-8 font-medium tracking-wide">
                    Erlebnisse
                  </a>
                </Link>
              </li>
              <li>
                <Button className=" uppercase font-base tracking-wider">
                  Anfragen
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navigation;
