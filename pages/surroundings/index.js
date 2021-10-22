import React from "react";
import Events from "../../components/Events";
import Layout from "../../components/Layout";
import translations from "../../data/home";

function Surroundings({ intl }) {
  return (
    <Layout title="Umgebung" intl={intl}>
      <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto px-4 py-16 md:pt-24">
        <h1
          className="text-4xl md:text-5xl font-serif text-secondary col-span-2 text-center"
          data-aos="fade-down"
        >
          {intl.surroundings.title}
        </h1>
        {/* <p className="text-xl text-default max-w-prose py-6 md:max-w-screen-md md:py-8 md:text-gray-600 col-span-2 text-center mx-auto">
          {intl.surroundings.intro}
        </p> */}
      </div>
      <Events intl={intl.events} showAll={true} />
    </Layout>
  );
}

export default Surroundings;
export async function getStaticProps({ locale }) {
  const intl = translations[locale];

  return {
    props: {
      intl,
      loc: locale,
    }, // will be passed to the page component as props
  };
}
