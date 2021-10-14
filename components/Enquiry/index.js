import React, { Fragment, useEffect, useState } from "react";
import s from "./Enquiry.module.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import dayjs from "dayjs";
import "dayjs/locale/de";

import Link from "next/link";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";

const people = [
  { id: 1, name: "1" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
  { id: 4, name: "4" },
];

const children = [
  { id: 0, name: "0" },
  { id: 1, name: "1" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
  { id: 4, name: "4" },
];

function Enquiry() {
  const baseUrl = "/request";
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date().setDate(startDate.getDate() + 6)
  );

  const [selected, setSelected] = useState(people[1]);
  const [selectedC, setSelectedC] = useState(children[0]);

  const [requestLink, setRequestLink] = useState(baseUrl);

  useEffect(() => {
    const urlParams = {
      startDate: dayjs(startDate).format("MM-DD-YYYY"),
      endDate: dayjs(endDate).format("MM-DD-YYYY"),
      people: selected?.name,
      children: selectedC?.name,
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
  }, [startDate, endDate, selected, selectedC]);

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.innerContainer}>
          <div className={s.center}>
            <h2 className={s.title}>Einfach anfragen</h2>

            <form
              className="grid grid-cols-2 sm:grid-cols-4 gap-0.5 bg-gray-100 mt-8 mb-4 sm:mt-12 sm:mb-10 md:mb-12"
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
                  Erwachsene
                </div>
                <div className="text-2xl text-gray-800">
                  <Listbox value={selected} onChange={setSelected}>
                    <div className="relative">
                      <Listbox.Button className="relative w-full">
                        <span className="block truncate">{selected.name}</span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                          {people.map((person, personIdx) => (
                            <Listbox.Option
                              key={personIdx}
                              className={({ active }) =>
                                `${
                                  active
                                    ? "text-red-900 bg-red-100"
                                    : "text-gray-900"
                                }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                              }
                              value={person}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={`${
                                      selected ? "font-medium" : "font-normal"
                                    } block truncate`}
                                  >
                                    {person.name}
                                  </span>
                                  {selected ? (
                                    <span
                                      className={`${
                                        active ? "text-red-600" : "text-red-600"
                                      }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                    >
                                      <CheckIcon
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
              </div>
              <div
                className="py-6 px-4 flex flex-col bg-white hover:bg-gray-100"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-stats]"
                data-aos-delay="300"
              >
                <div className="text-xl text-gray-500 mb-2 font-serif">
                  Kinder
                </div>
                <div className="text-2xl text-gray-800">
                  <Listbox value={selectedC} onChange={setSelectedC}>
                    <div className="relative">
                      <Listbox.Button className="relative w-full">
                        <span className="block truncate">{selectedC.name}</span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                          {children.map((person, personIdx) => (
                            <Listbox.Option
                              key={personIdx}
                              className={({ active }) =>
                                `${
                                  active
                                    ? "text-red-900 bg-red-100"
                                    : "text-gray-900"
                                }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                              }
                              value={person}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={`${
                                      selected ? "font-medium" : "font-normal"
                                    } block truncate`}
                                  >
                                    {person.name}
                                  </span>
                                  {selected ? (
                                    <span
                                      className={`${
                                        active ? "text-red-600" : "text-red-600"
                                      }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                    >
                                      <CheckIcon
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
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
