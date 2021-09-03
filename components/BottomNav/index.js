import React, { useState } from "react";
import s from "./BottomNav.module.css";
import Image from "next/image";

import { MenuAlt2Icon, PhoneIcon, XIcon } from "@heroicons/react/solid";
import { MailIcon } from "@heroicons/react/outline";

function BottomNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={s.section}>
        <nav className={s.container}>
          <ul className={s.innerContainer}>
            <li className="bg-primary text-white inline-flex justify-center py-6 px-4 hover:rounded hover:bg-primary-hover">
              <button className="w-6" onClick={() => setOpen(!open)}>
                <MenuAlt2Icon className="w-6 h-6" />
              </button>
            </li>
            <li className="bg-primary text-white inline-flex justify-center py-6 px-4 hover:rounded hover:bg-primary-hover">
              <PhoneIcon className="w-6 h-6" />
            </li>
            <li className="bg-primary text-white inline-flex justify-center py-6 px-4 hover:rounded hover:bg-primary-hover">
              <MailIcon className="w-6 h-6" />
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={`fixed inset-0 bg-primary z-20 ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        <div className="close-button absolute top-4 left-4 text-white ">
          <button
            className="w-8 h-8 hover:bg-white hover:bg-opacity-30 p-1 rounded"
            onClick={() => setOpen(!open)}
          >
            <XIcon />
          </button>
        </div>

        <div className={s.logoContainer}>
          <Image
            src="/tinified/logo_pencil_white.png"
            alt="hey logo"
            layout="responsive"
            width="461"
            height="165"
          />
        </div>
        <nav>
          <ul className="space-y-4 text-center text-white text-xl">
            <li className="hover:text-gray-300">Zimmer 1</li>
            <li className="hover:text-gray-300">Zimmer 1</li>
            <li className="hover:text-gray-300">Zimmer 1</li>
            <li className="hover:text-gray-300">Zimmer 1</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default BottomNav;
