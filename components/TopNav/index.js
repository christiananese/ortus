import React from "react";
import s from "./TopNav.module.css";
import Link from "next/link";
import { PhoneIcon, MailIcon } from "@heroicons/react/outline";
import { useRouter } from "next/dist/client/router";

function TopNav() {
  const { route } = useRouter();

  return (
    <section className={s.section} id="topnav">
      <div className={s.container}>
        <div className={s.innerContainer}>
          <div className={s.center}>
            <div className={s.iconContainer}>
              <a
                href="tel:+393388328978"
                className="bg-primary text-white inline-flex p-2 hover:bg-primary-hover transition-colors"
              >
                <PhoneIcon className="w-6 h-6" />
              </a>
              <a
                href="mailto:info@ortus.bz.it"
                className="bg-primary text-white inline-flex p-2 hover:bg-primary-hover transition-colors"
              >
                <MailIcon className="w-6 h-6" />
              </a>
            </div>
            <ul className={s.langContainer}>
              <li>
                <Link href={route} locale="de">
                  <a className="text-default hover:text-primary-hover">Deu</a>
                </Link>
              </li>
              <li>
                <Link href={route} locale="it">
                  <a className="text-default hover:text-primary-hover">Ita</a>
                </Link>
              </li>
              <li>
                <Link href={route} locale="en">
                  <a className="text-default hover:text-primary-hover">Eng</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopNav;
