import dayjs from "dayjs";
import "dayjs/locale/de";
import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Request({ startDate, endDate, people, children }) {
  const today = new Date();

  const [arrivalDate, setStartDate] = useState(
    startDate ? new Date(startDate) : new Date()
  );

  const [departureDate, setEndDate] = useState(
    endDate ? new Date(endDate) : new Date()
  );

  console.log(
    "FUCK ",
    startDate,
    endDate ? new Date(endDate) : new Date(),
    people,
    children
  );
  return (
    <Layout title="Ortus">
      <div className="grid grid-cols-2">
        <div className="pt-12">
          <DatePicker
            selected={arrivalDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={arrivalDate}
            endDate={departureDate}
            minDate={today}
            customInput={
              <div className="text-2xl text-gray-800">
                {dayjs(arrivalDate).locale("de").format("DD. MMM YYYY")}
              </div>
            }
          />
        </div>
        <div className="pt-12">
          <DatePicker
            selected={departureDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={arrivalDate}
            endDate={departureDate}
            minDate={arrivalDate}
            customInput={
              <div className="text-2xl text-gray-800">
                {dayjs(departureDate).locale("de").format("DD. MMMM YYYY")}
              </div>
            }
          />
        </div>
        <div className="pt-12">{people}</div>
        <div className="pt-12">{children}</div>
        <div className="grid-span-2"></div>
      </div>
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
