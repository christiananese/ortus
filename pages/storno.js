import Layout from "../components/Layout";
import translations from "../data/home";

function Privacy({ intl }) {
  const da = intl.privacy;
  const i18 = intl.storno
  return (
    <Layout title="Ortus" intl={intl}>
      <div className="flex flex-col justify-center items-center max-w-4xl mx-auto px-4 py-16 md:pt-24 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-secondary">
          {i18.title}
        </h1>
        <p className="text-xl text-default max-w-prose py-6 md:pb-8 md:text-gray-600 mx-auto">
          {i18.intro}
        </p>


        <h2 className="text-2xl font-serif text-secondary text-center mt-4 md:mt-6">
          {i18.subtitle}
        </h2>
        <p className="text-xl text-default max-w-prose py-6 md:text-gray-600 mx-auto">
        {i18.sub1}
        </p>
        <p className="text-xl text-default max-w-prose py-6 md:text-gray-600 mx-auto">
        {i18.sub2}
        </p>
        <p className="text-xl text-default max-w-prose py-6 md:text-gray-600 mx-auto">
        {i18.sub3}
        </p>
        <p className="text-xl text-default max-w-prose py-6 md:pb-8 md:text-gray-600 mx-auto">
        {i18.sub4}
        </p>
      </div>
    </Layout>
  );
}

export default Privacy;

export async function getServerSideProps({ query, locale }) {
  const intl = translations[locale];

  return {
    props: {
      intl,
    }, // will be passed to the page component as props
  };
}
