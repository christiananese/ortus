import React, { useEffect, useState } from "react";
import s from "./Enquiry.module.css";
import Button from "../Button";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import dayjs from "dayjs";
import "dayjs/locale/de";
import Link from "next/link";

function Enquiry() {
  const baseUrl = "/request";
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [requestLink, setRequestLink] = useState(baseUrl);

  useEffect(() => {
    const urlParams = {
      startDate: dayjs(startDate).format("MM-DD-YYYY"),
      endDate: dayjs(endDate).format("MM-DD-YYYY"),
    };

    const queryString = Object.keys(urlParams)
      .map((key) => {
        return (
          encodeURIComponent(key) + "=" + encodeURIComponent(urlParams[key])
        );
      })
      .join("&");

    console.log("SHIT ", queryString);
    setRequestLink(`${baseUrl}${queryString ? "?" + queryString : ""}`);
  }, [startDate, endDate]);

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.innerContainer}>
          <div className={s.center}>
            <h2 className={s.title}>Einfach anfragen</h2>

            <form
              className="grid grid-cols-2 sm:grid-cols-4 gap-0.5 bg-gray-100 mt-8 mb-4 md:mt-12 md:mb-8"
              data-aos-id-stats
            >
              <div
                className="py-6 px-4 flex flex-col bg-white hover:bg-gray-100"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-stats]"
              >
                <div className="text-xl text-gray-600 mb-2 font-serif">
                  Anfahrt
                </div>
                <div className="text-2xl text-gray-800">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    customInput={
                      <div className="text-2xl text-gray-800">
                        {dayjs(startDate).locale("de").format("DD. MMMM")}
                      </div>
                    }
                  />
                </div>
              </div>
              <div
                className="py-6 px-4 flex flex-col bg-white hover:bg-gray-100"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-stats]"
                data-aos-delay="100"
              >
                <div className="text-xl text-gray-500 mb-2 font-serif">
                  Abreise
                </div>
                <div className="text-2xl text-gray-800">
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    customInput={
                      <div className="text-2xl text-gray-800">
                        {dayjs(endDate).locale("de").format("DD. MMMM")}
                      </div>
                    }
                  />
                </div>
              </div>
              <div
                className="py-6 px-4 flex flex-col bg-white hover:bg-gray-100"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-stats]"
                data-aos-delay="200"
              >
                <div className="text-xl text-gray-500 mb-2 font-serif">
                  Anfahrt
                </div>
                <div className="text-2xl text-gray-800">20.08.2025</div>
              </div>
              <div
                className="py-6 px-4 flex flex-col bg-white hover:bg-gray-100"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-stats]"
                data-aos-delay="300"
              >
                <div className="text-xl text-gray-500 mb-2 font-serif">
                  Anfahrt
                </div>
                <div className="text-2xl text-gray-800">20.08.2025</div>
              </div>
            </form>
            <Link href={requestLink}>
              <a className={s.btn}>Zur Anfrage</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Enquiry;
