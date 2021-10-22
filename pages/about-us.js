import Layout from "../components/Layout";
import translations from "../data/home";

function AboutUs({ intl }) {
  return (
    <Layout title="Ortus" intl={intl}>
      <div className="flex flex-col justify-center items-center max-w-4xl mx-auto px-4 py-16 md:pt-24 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-secondary">
          Über uns
        </h1>
        <h2 className="text-2xl font-serif text-secondary text-center mt-4 md:mt-12">
          Eigentümer & verantwortlich für den Inhalt
        </h2>
        <p className="text-xl text-default max-w-prose py-6 md:py-8 md:text-gray-600">
          <strong>Familie Kirchler</strong>
          <br />
          Manteleweg 2 <br />
          39010 Nals
          <br />
          Südtirol - Italien
          <br />
          Tel +39 0473 MwSt. Nr.
          <br />
          info@ortus.bz.it
          <br />
          <a href="">www.ortus.bz-it</a>
        </p>
      </div>
    </Layout>
  );
}

export default AboutUs;

export async function getServerSideProps({ query, locale }) {
  const intl = translations[locale];

  return {
    props: {
      intl,
    }, // will be passed to the page component as props
  };
}
