import Layout from "../components/Layout";
import translations from "../data/home";

function AboutUs({ intl }) {
  const da = intl.aboutUs;
  return (
    <Layout title="Ortus" intl={intl}>
      <div className="flex flex-col justify-center items-center max-w-4xl mx-auto px-4 py-16 md:pt-24 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-secondary">
          {da.title}
        </h1>
        <p
          className="text-xl text-default max-w-prose py-6 md:py-8 md:text-gray-600 mx-auto"
          dangerouslySetInnerHTML={{ __html: da.text }}
        />
        <p
          className="text-xl text-default max-w-prose py-6 md:py-8 md:text-gray-600 mx-auto"
          dangerouslySetInnerHTML={{ __html: da.carFree }}
        />
        <h2 className="text-2xl font-serif text-secondary text-center mt-4 md:mt-12">
          {da.extras.title}
        </h2>
        <p
          className="text-xl text-default max-w-prose py-6 md:py-8 md:text-gray-600 mx-auto"
          dangerouslySetInnerHTML={{ __html: da.extras.text }}
        />
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
