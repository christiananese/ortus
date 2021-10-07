import React from "react";
import Events from "../../components/Events";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";

function Surrounding({ slug }) {
  return (
    <Layout title="Umgebung">
      <Hero imgUrl="/slider/tinified/trauti.jpg" width="1072" height="712" />
      <div className="grid items-center md:grid md:gap-12 md:grid-cols-12 lg:gap-20">
        <div className="col-span-10 md:col-start-2 md:col-span-10 flex flex-col justify-center items-center text-center">
          <h1
            className={"text-5xl font-serif text-gray-800"}
            data-aos="fade-down"
          >
            Unser Neuanfang
          </h1>
          <p
            className={
              "text-xl text-default max-w-prose py-12 md:max-w-screen-md md:py-8 md:text-gray-600"
            }
            data-aos="fade-down"
            data-aos-delay="300"
          >
            Im Jahr 2019 haben wir unseren Hof Ortus fertiggestellt und uns so
            einen langersehnten Traum verwirklicht. Das Haus wurde als KlimaHaus
            Nature errichtet, ein Haus, das die moderne Architektur mit der
            schlichten Erhabenheit der Natur verbindet. Wichtig waren uns dabei
            die Energieeffizienz, die Nachhaltigkeit und Natürlichkeit der
            Baumaterialien, um ein angenehmes und gesundes Raumklima zu schaffen
            - Voraussetzung für das Wohlbefinden und die Gesundheit seiner
            Bewohner.{" "}
          </p>
        </div>
      </div>
      <Events exclude={slug} />
    </Layout>
  );
}

export default Surrounding;

export async function getServerSideProps({ query }) {
  const { slug } = query;

  return {
    props: {
      slug,
    }, // will be passed to the page component as props
  };
}
