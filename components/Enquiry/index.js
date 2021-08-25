import React from "react";
import s from "./Enquiry.module.css";
import Button from "../Button";

function Enquiry() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.innerContainer}>
          <div className={s.center}>
            <h2 className={s.title}>Einfach anfragen</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-0.5 bg-gray-100 mt-8 mb-4 md:mt-12 md:mb-8">
              <div className="py-6 px-4 flex flex-col bg-white hover:bg-gray-100">
                <div className="text-xl text-gray-600 mb-2 font-serif">
                  Anfahrt
                </div>
                <div className="text-2xl text-gray-800">20.08.2025</div>
              </div>
              <div className="py-6 px-4 flex flex-col bg-white hover:bg-gray-100">
                <div className="text-xl text-gray-500 mb-2 font-serif">
                  Anfahrt
                </div>
                <div className="text-2xl text-gray-800">20.08.2025</div>
              </div>
              <div className="py-6 px-4 flex flex-col bg-white hover:bg-gray-100">
                <div className="text-xl text-gray-500 mb-2 font-serif">
                  Anfahrt
                </div>
                <div className="text-2xl text-gray-800">20.08.2025</div>
              </div>
              <div className="py-6 px-4 flex flex-col bg-white hover:bg-gray-100">
                <div className="text-xl text-gray-500 mb-2 font-serif">
                  Anfahrt
                </div>
                <div className="text-2xl text-gray-800">20.08.2025</div>
              </div>
            </div>
            <Button className={s.btn}>Zur Anfrage</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Enquiry;
