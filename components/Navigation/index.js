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
                  <a className="text-default hover:text-primary-hover uppercase leading-8 font-medium tracking-wide">
                    Erlebnisse
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-default hover:text-primary-hover flex-shrink-0 uppercase leading-8 font-medium tracking-wide">
                    Über uns
                  </a>
                </Link>
              </li>
            </ul>
            <Link href="/">
              <a className={s.logoContainer}>
                <Image
                  src="/tinified/logo.png"
                  alt="hey logo"
                  layout="responsive"
                  width="461"
                  height="165"
                />
              </a>
            </Link>
            <ul className={s.left}>
              <li>
                <Link href="/request">
                  <a className="bg-primary cursor-pointer py-2 px-4 inline-flex font-semibold text-center justify-center items-center text-primary border-primary rounded transition ease-in-out duration-150 tracking-wider uppercase">
                    Anfragen
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navigation;
