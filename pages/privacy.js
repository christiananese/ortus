import Layout from "../components/Layout";

function Privacy() {
  return (
    <Layout title="Ortus">
      <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto px-4 py-16 md:pt-24">
        <h1
          className="text-4xl md:text-5xl font-serif text-secondary col-span-2 text-center"
          data-aos="fade-down"
        >
          Eigentümer & verantwortlich für den Inhalt
        </h1>
        <h2
          className="text-3xl font-serif text-secondary col-span-2 text-center"
          data-aos="fade-down"
        ></h2>
        <p className="text-xl text-default max-w-prose py-6 md:max-w-screen-md md:py-8 md:text-gray-600 col-span-2 text-center">
          Familie Kirchler
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
        <h2
          className="text-3xl font-serif text-secondary col-span-2 text-center"
          data-aos="fade-down"
        >
          &copy; Konzept, Design & Programmierung
        </h2>
        <p className="text-xl text-default max-w-prose py-6 md:max-w-screen-md md:py-8 md:text-gray-600 col-span-2 text-center">
          Christian Anese
          <br />
          39012 Meran
          <br />
          Hl. Kreuzgasse 5
          <br />
          Tel +39 352
          <br />
          MwSt. Nr.
          <br />
          info@ortus.bz.it
          <br />
          <a href="">www.ortus.bz-it</a>
        </p>
        <h2
          className="text-3xl font-serif text-secondary col-span-2 text-center"
          data-aos="fade-down"
        >
          Fotos
        </h2>
        <p className="text-xl text-default max-w-prose py-6 md:max-w-screen-md md:py-8 md:text-gray-600 col-span-2 text-center">
          Credit 1
          <br />
          Credit 2
        </p>
        <h2
          className="text-3xl font-serif text-secondary col-span-2 text-center"
          data-aos="fade-down"
        >
          Copyright
        </h2>
        <p className="text-xl text-default max-w-prose py-6 md:max-w-screen-md md:py-8 md:text-gray-600 col-span-2 text-center">
          A,B,C die Katze lieft im Schnee
        </p>
        <h2
          className="text-3xl font-serif text-secondary col-span-2 text-center"
          data-aos="fade-down"
        >
          Fotos
        </h2>
        <p className="text-xl text-default max-w-prose py-6 md:max-w-screen-md md:py-8 md:text-gray-600 col-span-2 text-center">
          Credit 1
          <br />
          Credit 2
        </p>
      </div>
    </Layout>
  );
}

export default Privacy;
