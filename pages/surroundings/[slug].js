import React from "react";
import Events from "../../components/Events";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";

import { de } from "../../data/home";

function Surrounding({ slug }) {
  const intl = de;

  const da = intl.events[slug];

  return (
    <Layout title="Umgebung">
      <Hero
        imgUrl={da.hero.path}
        width={da.hero.width}
        height={da.hero.height}
        intl={da.hero}
      />
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
              "text-xl text-default max-w-prose py-12 md:max-w-screen-md md:py-8 md:text-gray-600"
            }
            dangerouslySetInnerHTML={{ __html: da.text }}
          />
        </div>
      </div>
      <Events exclude={slug} intl={intl.events} />
    </Layout>
  );
}

export default Surrounding;

export async function getServerSideProps({ query }) {
  const { slug } = query;
  console.log("SHITTTTE ", slug);

  return {
    props: {
      slug,
    }, // will be passed to the page component as props
  };
}
