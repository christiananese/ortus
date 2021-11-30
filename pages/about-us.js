import Button from "../components/Button";
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
          {da.route.resia.title}
        </h2>

        <p
          className="text-xl text-default max-w-prose py-6 md:py-8 md:text-gray-600 mx-auto"
          dangerouslySetInnerHTML={{ __html: da.route.resia.text }}
        />

        <h2 className="text-2xl font-serif text-secondary text-center mt-4 md:mt-12">
          {da.route.brennero.title}
        </h2>

        <p
          className="text-xl text-default max-w-prose py-6 md:py-8 md:text-gray-600 mx-auto"
          dangerouslySetInnerHTML={{ __html: da.route.brennero.text }}
        />

        <Button
          variant="ghost"
          Component="a"
          href="https://www.google.com/maps/place/Manteleweg,+2,+39010+Nals,+S%C3%BCdtirol/data=!4m2!3m1!1s0x4782977c8a8dd51f:0x5d639575cee3b575?sa=X&ved=2ahUKEwiI7uTi_8vyAhWFzKQKHZmDCDoQ8gF6BAgLEAE"
          target="_blank"
          rel="noopener"
        >
          {da.route.maps}
        </Button>

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
