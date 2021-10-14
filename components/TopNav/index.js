import React from "react";
import Button from "../Button";
import s from "./TopNav.module.css";
import Link from "next/link";
import { PhoneIcon, MailIcon } from "@heroicons/react/outline";

function TopNav() {
  return (
    <section className={s.section} id="topnav">
      <div className={s.container}>
        <div className={s.innerContainer}>
          <div className={s.center}>
            <div className={s.iconContainer}>
              {/* <Button>hey</Button> */}
              <div className="bg-primary text-white inline-flex p-2 hover:bg-primary-hover transition-colors">
                <PhoneIcon className="w-6 h-6" />
              </div>
              <div className="bg-primary text-white inline-flex p-2 hover:bg-primary-hover transition-colors">
                <MailIcon className="w-6 h-6" />
              </div>
            </div>
            <ul className={s.langContainer}>
              <li>
                <Link href="/">
                  <a className="text-default hover:text-primary-hover">Deu</a>
                </Link>
              </li>
              <li>
                <Link href="/it">
                  <a className="text-default hover:text-primary-hover">Ita</a>
                </Link>
              </li>
              <li>
                <Link href="/en">
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
