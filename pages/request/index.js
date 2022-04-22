import dayjs from "dayjs";
import Link from "next/link";

import "dayjs/locale/de";
import "dayjs/locale/it";
import "dayjs/locale/en";

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

import translations from "../../data/home";
import { Controller, useForm } from "react-hook-form";

function Request({ startDate, endDate, people, children, intl, loc }) {

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  dayjs.locale(loc);

  const today = new Date();

  const [selected, setSelected] = useState(peopleOptions[1]);
  const [selectedC, setSelectedC] = useState(peopleOptions[1]);

  const [arrivalDate, setStartDate] = useState(
    startDate ? new Date(startDate) : new Date()
  );

  const [departureDate, setEndDate] = useState(
    endDate ? new Date(endDate) : new Date()
  );

  const onSubmit = async (data) => {
    const payload = Object.assign({}, data, {
      adults: selected?.value,
      children: selectedC?.value,
    });
    const res = await fetch("/api/request", {
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    setTimeout(() => reset(), 2000);
  };

  console.log("Form Errors ", errors)

  return (
    <Layout title="Ortus" intl={intl}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto px-4 py-16 md:pt-24"
      >
        <h1
          className="text-4xl md:text-5xl font-serif text-secondary col-span-2 text-center"
          data-aos="fade-down"
        >
          {intl.request.title}
        </h1>
        <p className="text-xl text-default max-w-prose py-6 md:max-w-screen-md md:py-8 md:text-gray-600 col-span-2 text-center mx-auto">
          {intl.request.intro}
        </p>
        <h2
          className="text-3xl font-serif text-secondary col-span-2 text-center"
          data-aos="fade-down"
        >
          {intl.request.yourEnquiry}
        </h2>
        <div className="col-span-2 md:col-span-1">
          <Controller
            name="arrivalDate"
            control={control}
            defaultValue={arrivalDate}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                {...field}
                startDate={field.value}
                endDate={departureDate}
                minDate={today}
                customInput={
                  <div className="relative text-2xl text-gray-800 bg-gray-100 border border-gray-300 py-3 px-2">
                    {dayjs(field.value)
                      .locale(loc || "de")
                      .format("DD. MMMM YYYY")}
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <CalendarIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                }
              />
            )}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Controller
            name="departureDate"
            control={control}
            defaultValue={departureDate}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                {...field}
                startDate={arrivalDate}
                endDate={field.value}
                minDate={arrivalDate}
                customInput={
                  <div className="relative text-2xl text-gray-800 bg-gray-100 border border-gray-300 py-3 px-2">
                    {dayjs(field.value)
                      .locale(loc || "de")
                      .format("DD. MMMM YYYY")}
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <CalendarIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                }
              />
            )}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative text-2xl text-gray-800 bg-gray-100 border border-gray-300 py-3 px-2 w-full text-left">
              <Listbox.Button className="relative w-full text-left">
                <span className="">
                  {selected.value} {intl.request.adults}
                </span>
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
                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none z-10 border border-gray-300 bg-gray-100">
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
                            {person.value} {intl.request.adults}
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
                <span className="">
                  {selectedC.value} {intl.request.children}
                </span>
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
                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none z-10 border border-gray-300 bg-gray-100">
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
                            {child.value} {intl.request.children}
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
          {intl.request.contactData}
        </h2>
        <div className="col-span-2 md:col-span-1">
          <input
            className="text-2xl mt-1 block w-full bg-gray-100 border-gray-300 focus:ring-primary-hover focus:border-primary-hover p-3 text-gray-800"
            placeholder={intl.request.firstName}
            {...register("firstName", { required: false })}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <input
            className="text-2xl mt-1 block w-full bg-gray-100 border-gray-300 focus:ring-primary-hover focus:border-primary-hover p-3 text-gray-800"
            placeholder={intl.request.lastName}
            {...register("lastName", { required: true })}
            />
            {errors.lastName && <span className="text-red-500">{intl.errors.invalid}</span>}
        </div>
        <div className="col-span-2">
          <input
            className="text-2xl mt-1 block w-full bg-gray-100 border-gray-300 focus:ring-primary-hover focus:border-primary-hover p-3 text-gray-800"
            placeholder={intl.request.email}
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <span className="text-red-500">{intl.errors.invalid}</span>}
        </div>
        <div className="col-span-2">
          <Controller
            name="tel"
            control={control}
            defaultValue=""
            rules={{ required: false, minLength: 6, maxLength: 12 }}
            render={({ field }) => (
              <Input placeholder={intl.request.tel} {...field} />
            )}
          />
          {errors.tel && <span className="text-red-500">{intl.errors.invalid}</span>}
        </div>
        <div className="col-span-2">
          <input
            className="text-2xl mt-1 block w-full bg-gray-100 border-gray-300 focus:ring-primary-hover focus:border-primary-hover p-3 text-gray-800"
            placeholder={intl.request.street}
            {...register("street")}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <input
            className="text-2xl mt-1 block w-full bg-gray-100 border-gray-300 focus:ring-primary-hover focus:border-primary-hover p-3 text-gray-800"
            placeholder={intl.request.zipCode}
            {...register("zipCode")}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <input
            className="text-2xl mt-1 block w-full bg-gray-100 border-gray-300 focus:ring-primary-hover focus:border-primary-hover p-3 text-gray-800"
            placeholder={intl.request.location}
            {...register("location")}
          />
        </div>
        <div className="col-span-2">
          <input
            className="text-2xl mt-1 block w-full bg-gray-100 border-gray-300 focus:ring-primary-hover focus:border-primary-hover p-3 text-gray-800"
            placeholder={intl.request.country}
            {...register("country")}
          />
        </div>
        <div className="col-span-2">
          <textarea
            className="text-2xl mt-1 block w-full bg-gray-100 border-gray-300 focus:ring-primary-hover focus:border-primary-hover p-3 text-gray-800"
            placeholder={intl.request.yourMessage}
            {...register("yourMessage")}
            rows={5}
          />
        </div>
        <div className="flex col-span-2 sm:col-span-1 py-4 sm:py-0 items-center">
          <label>
            <input
              type="checkbox"
              {...register("privacy", { required: true })}
            />
            <span className={`pl-2 ${errors.privacy && "text-red-500 underline"}`}>
              {intl.request.privacy}
              <Link href="/privacy">
                <a className="underline hover:text-secondary" target="_blank">
                  {intl.request.privacyLink}
                </a>
              </Link>
            </span>
          </label>
        </div>
        <div className="flex md:justify-end col-span-2 sm:col-span-1">
          {isSubmitSuccessful ?
            intl.request.success
          : (
            <Button
              className="tracking-widest uppercase text-lg py-4 px-6 w-full md:w-auto"
              type={"submit"}
            >
              {intl.request.sendRequest}
            </Button>
          )}
        </div>
      </form>
      <div className="md:py-12">
        <Events intl={intl.events} />
      </div>
    </Layout>
  );
}

export default Request;

export async function getServerSideProps({ query, locale }) {
  const { startDate = null, endDate = null, people = 2, children = 0 } = query;

  const intl = translations[locale];

  return {
    props: {
      startDate,
      endDate,
      people,
      children,
      intl,
      loc: locale,
    }, // will be passed to the page component as props
  };
}
