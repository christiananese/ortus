import Layout from "../components/Layout";
import translations from "../data/home";

function Privacy({ intl }) {
  const da = intl.privacy;
  return (
    <Layout title="Ortus" intl={intl}>
      <div className="flex flex-col justify-center items-center max-w-4xl mx-auto px-4 py-16 md:pt-24 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-secondary">
          {da.title}
        </h1>
        <h2 className="text-2xl font-serif text-secondary text-center mt-4 md:mt-12">
          {da.privacyKodex.title}
        </h2>
        <p className="text-xl text-default max-w-prose py-6 md:pb-8 md:text-gray-600 mx-auto">
          {da.privacyKodex.text}
        </p>

        <h2 className="text-2xl font-serif text-secondary text-center mt-4 md:mt-6">
          {da.goals.title}
        </h2>
        <p className="text-xl text-default max-w-prose py-6 md:pb-8 md:text-gray-600 mx-auto text-left">
          <ul className="list-disc">
            <li>{da.goals["1"]}</li>
            <li>{da.goals["2"]}</li>
            <li>{da.goals["3"]}</li>
            <li>{da.goals["4"]}</li>
            <li>{da.goals["5"]}</li>
            <li>{da.goals["6"]}</li>
          </ul>
        </p>

        <h2 className="text-2xl font-serif text-secondary text-center mt-4 md:mt-6">
          {da.distribution.title}
        </h2>
        <p className="text-xl text-default max-w-prose py-6 md:pb-8 md:text-gray-600 mx-auto">
          {da.distribution.pre}
          <ul className="list-disc text-left my-4">
            <li>{da.distribution[1]}</li>
            <li>{da.distribution[2]}</li>
            <li>{da.distribution[3]}</li>
            <li>{da.distribution[4]}</li>
          </ul>
          {da.distribution.post}
        </p>

        <h2 className="text-2xl font-serif text-secondary text-center mt-4 md:mt-6">
          {da.type.title}
        </h2>
        <p className="text-xl text-default max-w-prose py-6 md:pb-8 md:text-gray-600 mx-auto">
          {da.type.text}
        </p>

        <h2 className="text-2xl font-serif text-secondary text-center mt-4 md:mt-6">
          {da.cookies.title}
        </h2>
        <p className="text-xl text-default max-w-prose py-6 md:pb-8 md:text-gray-600 mx-auto">
          {da.cookies.text}
        </p>

        <h2 className="text-2xl font-serif text-secondary text-center mt-4 md:mt-6">
          {da.rights.title}
        </h2>
        <p className="text-xl text-default max-w-prose py-6 md:pb-8 md:text-gray-600 mx-auto">
          {da.rights.text}
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
