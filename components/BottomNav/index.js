import React, { useState } from "react";
import Button from "../Button";
import s from "./BottomNav.module.css";
import Link from "next/link";
import Image from "next/image";

function BottomNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={s.section}>
        <nav className={s.container}>
          <ul className={s.innerContainer}>
            <li className="bg-primary text-white inline-flex justify-center py-6 px-4 hover:rounded hover:bg-primary-hover">
              <button onClick={() => setOpen(!open)}>Menu</button>
            </li>
            <li className="bg-primary text-white inline-flex justify-center py-6 px-4 hover:rounded hover:bg-primary-hover">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </li>
            <li className="bg-primary text-white inline-flex justify-center py-6 px-4 hover:rounded hover:bg-primary-hover">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={`fixed inset-0 bg-primary z-20 ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        <div className="close-button absolute top-0 left-0 bg-gray-500">
          <button onClick={() => setOpen(!open)}>X</button>
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
