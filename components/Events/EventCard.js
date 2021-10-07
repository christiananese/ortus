import Image from "next/image";
import Link from "next/link";
import React from "react";
import s from "./Events.module.css";

function EventCard(props) {
  const { title, img, description, link } = props;

  return (
    <Link href={link}>
      <a className="flex flex-col bg-gray-200 cursor-pointer col-span-3 md:col-span-1 sm:max-w-sm sm:mx-auto flex-shrink-0 w-full md:max-w-none">
        <div className="bg-gray-300 relative w-full">
          <Image
            src={img}
            layout="responsive"
            alt={title}
            width="600"
            height="400"
          />
        </div>
        <div className="flex flex-col text-center py-6">
          <h3 className={s.cardTitle}>{title}</h3>

          <p className={s.cardLink}>{description}</p>
        </div>
      </a>
    </Link>
  );
}

export default EventCard;
