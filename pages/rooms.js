import React from "react";
import Events from "../components/Events";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

import translations from "../data/home";

function Rooms({ slug, intl }) {
  const da = intl.rooms;

  return (
    <Layout title="Umgebung">
      {/* <Hero
        imgUrl={da.hero.path}
        width={da.hero.width}
        height={da.hero.height}
        intl={da.hero}
      /> */}
      <div className="grid items-center md:grid md:gap-12 md:grid-cols-12 lg:gap-20">
        <div className="col-span-10 md:col-start-2 md:col-span-10 flex flex-col justify-center items-center text-center">
          <h1
            className={"text-5xl font-serif text-gray-800"}
            data-aos="fade-down"
          >
            {da.title}
          </h1>
          <p
            className={
              "text-xl text-default max-w-prose pt-12 md:max-w-screen-md md:pt-8 md:text-gray-600"
            }
            dangerouslySetInnerHTML={{ __html: da.intro }}
          />
          <p
            className={
              "text-xl text-default max-w-prose pt-12 md:max-w-screen-md md:pt-8 md:text-gray-600"
            }
            dangerouslySetInnerHTML={{ __html: da.ammenities }}
          />
          <p
            className={
              "text-xl text-default max-w-prose pt-12 md:max-w-screen-md md:pt-8 md:text-gray-600"
            }
            dangerouslySetInnerHTML={{ __html: da.terrace }}
          />
          <p
            className={
              "text-xl text-default max-w-prose pt-12 md:max-w-screen-md md:pt-8 md:text-gray-600"
            }
            dangerouslySetInnerHTML={{ __html: da.ammenities2 }}
          />
          <p
            className={
              "text-xl text-default max-w-prose pt-12 md:max-w-screen-md md:pt-8 md:text-gray-600"
            }
            dangerouslySetInnerHTML={{ __html: da.extras }}
          />
          <p
            className={
              "text-xl text-default max-w-prose pt-12 md:max-w-screen-md md:pt-8 md:text-gray-600"
            }
            dangerouslySetInnerHTML={{ __html: da.extras2 }}
          />
          <h2 className="text-3xl font-serif text-secondary col-span-2 text-center pt-12">
            {da.price}
          </h2>
          <p
            className={
              "text-4xl text-default max-w-prose pt-12 md:max-w-screen-md md:pt-8 md:text-gray-600"
            }
          >
            {da.pricing}
          </p>
        </div>
      </div>
      <Events exclude={slug} intl={intl.events} />

      <div className="grid items-center md:grid md:gap-12 md:grid-cols-12 lg:gap-20 pb-12">
        <div className="col-span-10 md:col-start-2 md:col-span-10 flex flex-col justify-center items-center text-center">
          <p
            className={
              "text-sm text-default max-w-prose pt-12 md:max-w-screen-md md:pt-8 md:text-gray-600"
            }
            dangerouslySetInnerHTML={{ __html: da.pricingInfo }}
          />
          <p
            className={
              "text-sm text-default max-w-prose pt-12 md:max-w-screen-md md:pt-8 md:text-gray-600"
            }
            dangerouslySetInnerHTML={{ __html: da.localTax }}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Rooms;

export async function getServerSideProps({ query, locale }) {
  const intl = translations[locale];

  console.log("DA ", query);

  return {
    props: {
      intl,
    }, // will be passed to the page component as props
  };
}
