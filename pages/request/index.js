import dayjs from "dayjs";
import "dayjs/locale/de";
import { useRouter } from "next/dist/client/router";
import React, { Fragment, useState } from "react";
import Layout from "../../components/Layout";
import Input from "../../components/Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarIcon, CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Listbox, Transition } from "@headlessui/react";
import { childrenOptions, peopleOptions } from "../../lib/constants";
import Textarea from "../../components/Textarea";
import Button from "../../components/Button";
import Events from "../../components/Events";

function Request({ startDate, endDate, people, children }) {
  const today = new Date();

  const [selected, setSelected] = useState(peopleOptions[1]);
  const [selectedC, setSelectedC] = useState(peopleOptions[1]);

  const [arrivalDate, setStartDate] = useState(
    startDate ? new Date(startDate) : new Date()
  );

  const [departureDate, setEndDate] = useState(
    endDate ? new Date(endDate) : new Date()
  );

  return (
    <Layout title="Ortus">
      <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto px-4 py-16 md:pt-24">
        <h1
          className="text-4xl md:text-5xl font-serif text-secondary col-span-2 text-center"
          data-aos="fade-down"
        >
          Einfach genießen
        </h1>
        <p
          className="text-xl text-default max-w-prose py-6 md:max-w-screen-md md:py-8 md:text-gray-600 col-span-2 text-center"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          Wir freuen uns auf dich und erstellen so schnell wie möglich ein
          individuelles Angebot für dich.
        </p>
        <h2
          className="text-3xl font-serif text-secondary col-span-2 text-center"
          data-aos="fade-down"
        >
          Ihre Anfrage
        </h2>

        <div className="col-span-2 md:col-span-1">
          <DatePicker
            selected={arrivalDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={arrivalDate}
            endDate={departureDate}
            minDate={today}
            customInput={
              <div className="relative text-2xl text-gray-800 bg-gray-100 border border-gray-300 py-3 px-2">
                {dayjs(arrivalDate).locale("de").format("DD. MMM YYYY")}
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <CalendarIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </div>
            }
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <DatePicker
            selected={departureDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={arrivalDate}
            endDate={departureDate}
            minDate={arrivalDate}
            customInput={
              <div className="relative text-2xl text-gray-800 bg-gray-100 border border-gray-300 py-3 px-2">
                {dayjs(departureDate).locale("de").format("DD. MMMM YYYY")}
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <CalendarIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </div>
            }
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative text-2xl text-gray-800 bg-gray-100 border border-gray-300 py-3 px-2 w-full text-left">
              <Listbox.Button className="relative w-full text-left">
                <span className="">{selected.value} Erwachsene</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none z-10 border border-gray-300 bg-gray-100">
                  {peopleOptions.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `${active ? "text-red-900 bg-red-100" : "text-gray-900"}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${
                              selected ? "font-medium" : "font-normal"
                            } block truncate text-xl`}
                          >
                            {person.value} Erwachsene
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

        <div className="col-span-2 md:col-span-1">
          <Listbox value={selectedC} onChange={setSelectedC}>
            <div className="relative text-2xl text-gray-800 bg-gray-100 border border-gray-300 py-3 px-2 w-full text-left">
              <Listbox.Button className="relative w-full text-left">
                <span className="">{selectedC.value} Kinder</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none z-10 border border-gray-300 bg-gray-100">
                  {childrenOptions.map((child, childIdx) => (
                    <Listbox.Option
                      key={childIdx}
                      className={({ active }) =>
                        `${active ? "text-red-900 bg-red-100" : "text-gray-900"}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                      }
                      value={child}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${
                              selected ? "font-medium" : "font-normal"
                            } block truncate text-xl`}
                          >
                            {child.value} Kinder
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

        <h2
          className={
            "text-3xl font-serif text-secondary col-span-2 text-center mt-8"
          }
          data-aos="fade-down"
        >
          Kontaktdaten
        </h2>
        <div className="col-span-2 md:col-span-1">
          <Input placeholder="Vorname" />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Input placeholder="Nachname" />
        </div>
        <div className="col-span-2">
          <Input placeholder="E-Mail" />
        </div>
        <div className="col-span-2">
          <Input placeholder="Telefon" />
        </div>
        <div className="col-span-2">
          <Input placeholder="Straße" />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Input placeholder="Plz" />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Input placeholder="Ort" />
        </div>
        <div className="col-span-2">
          <Input placeholder="Land" />
        </div>
        <div className="col-span-2">
          <Textarea placeholder="Ihre Nachricht" rows={5} />
        </div>
        <div className="flex items-end col-span-2 sm:col-span-1 py-4 sm:py-0">
          <CheckIcon height="24px" />
        </div>
        <div className="flex md:justify-end col-span-2 sm:col-span-1">
          <Button className="tracking-widest uppercase text-lg py-4 px-6 w-full md:w-auto">
            Anfrage senden
          </Button>
        </div>
      </div>
      <Events />
    </Layout>
  );
}

export default Request;

export async function getServerSideProps({ query }) {
  const { startDate = null, endDate = null, people = 2, children = 0 } = query;

  return {
    props: {
      startDate,
      endDate,
      people,
      children,
    }, // will be passed to the page component as props
  };
}
