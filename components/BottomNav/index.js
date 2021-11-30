import React, { useState } from "react";
import s from "./BottomNav.module.css";
import Image from "next/image";
import Link from "next/link";

import { MenuAlt2Icon, PhoneIcon, XIcon } from "@heroicons/react/solid";
import { MailIcon } from "@heroicons/react/outline";
import { Transition } from "@headlessui/react";

function BottomNav({ intl }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={s.section}>
        <nav className={s.container}>
          <ul className={s.innerContainer}>
            <li className="bg-primary text-white inline-flex justify-center hover:rounded hover:bg-primary-hover">
              <button
                className="py-6 px-4 w-full inline-flex justify-center"
                onClick={() => setOpen(!open)}
              >
                <MenuAlt2Icon className="w-6 h-6" />
              </button>
            </li>
            <li className="bg-primary text-white inline-flex justify-center hover:rounded hover:bg-primary-hover">
              <a
                className="py-6 px-4 w-full inline-flex justify-center"
                href="tel:+393388328978"
              >
                <PhoneIcon className="w-6 h-6" />
              </a>
            </li>
            <li className="bg-primary text-white inline-flex justify-center hover:rounded hover:bg-primary-hover">
              <a
                className="py-6 px-4 w-full inline-flex justify-center"
                href="mailto:info@ortus.bz.it"
              >
                <MailIcon className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Transition
        show={open}
        enter="transition-opacity duration-350"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className={`fixed inset-0 bg-primary z-20 ${
            open ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        >
          <div className="close-button absolute top-4 left-4 text-white ">
            <button
              className="w-8 h-8 hover:bg-white hover:bg-opacity-30 p-1 rounded "
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
              <Transition.Child
                as="li"
                enter="transition-all ease-in-out duration-500"
                enterFrom="opacity-0 translate-x-[20%]"
                enterTo="opacity-100  translate-x-0"
                leave="transition-opacity ease-linear duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="hover:text-gray-300"
              >
                <Link href="/about-us">{intl.aboutUs}</Link>
              </Transition.Child>
              <Transition.Child
                as="li"
                enter="transition-all ease-in-out duration-500"
                enterFrom="opacity-0 translate-x-[20%]"
                enterTo="opacity-100  translate-x-0"
                leave="transition-opacity ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="hover:text-gray-300 delay-300"
              >
                <Link href="/surroundings">{intl.surroundings}</Link>
              </Transition.Child>
              <Transition.Child
                as="li"
                enter="transition-all ease-in-out duration-500"
                enterFrom="opacity-0 translate-x-[20%]"
                enterTo="opacity-100  translate-x-0"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="hover:text-gray-300 delay-500 pt-8"
              >
                <Link href="/">
                  <a className="border border-white bg-primary cursor-pointer py-2 px-4 inline-flex font-medium text-center justify-center items-center text-primary border-primary transition ease-in-out duration-150 tracking-wider">
                    {intl.cta}
                  </a>
                </Link>
              </Transition.Child>
            </ul>
          </nav>
        </div>
      </Transition>
    </>
  );
}

export default BottomNav;
