import Image from "next/image";
import React from "react";
import s from "./Events.module.css";

function EventCard(props) {
  const { title, img, description, link } = props;

  const goToRoute = () => {
    console.log("SHIT GOT OT ");
  };

  return (
    <div
      className="flex flex-col bg-gray-200 cursor-pointer col-span-3 md:col-span-1 sm:max-w-sm md:max-w-none"
      onClick={goToRoute}
    >
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
        <a href={link} className={s.cardLink}>
          {description}
        </a>
      </div>
    </div>
  );
}

export default EventCard;
