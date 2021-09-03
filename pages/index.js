import { useEffect } from "react";

import Hero from "../components/Hero";
import Slider from "../sections/slider";
import Intro from "../components/Intro";
import Enquiry from "../components/Enquiry";

import Events from "../components/Events";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Ortus">
      <Hero />
      <Intro />
      <Slider />
      <Events />
      <Enquiry />
    </Layout>
  );
}
