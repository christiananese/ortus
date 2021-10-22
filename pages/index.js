import Hero from "../components/Hero";
import Slider from "../sections/slider";
import Intro from "../components/Intro";
import Enquiry from "../components/Enquiry";

import Events from "../components/Events";
import Layout from "../components/Layout";

import translations from "../data/home";

export default function Home({ intl }) {
  return (
    <Layout title="Ortus" intl={intl}>
      <Hero intl={intl.hero} />
      <Intro intl={intl.intro} />
      <Slider intl={intl.slider} />
      <Events intl={intl.events} />
      <Enquiry intl={intl.enquiry} />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const intl = translations[locale];

  return {
    props: {
      intl,
    }, // will be passed to the page component as props
  };
}
