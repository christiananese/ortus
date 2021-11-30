import Layout from "../components/Layout";
import translations from "../data/home";

function Imprint({ intl }) {
  const da = intl.imprint;
  return (
    <Layout title="Ortus" intl={intl}>
      <div className="flex flex-col justify-center items-center max-w-4xl mx-auto px-4 py-16 md:pt-24 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-secondary">
          {da.title}
        </h1>
        <h2 className="text-2xl font-serif text-secondary text-center mt-4 md:mt-12">
          {da.owner.title}
        </h2>
        <p className="text-xl text-default max-w-prose py-6 md:py-8 md:text-gray-600 mx-auto">
          <strong>{da.owner.name}</strong>
          <br />
          Manteleweg 2 <br />
          39010 Nals
          <br />
          Südtirol - Italien
          <br />
          Tel <a href="tel:+393388328978">+39 338 8328978</a>
          <br />
          MwSt. Nr. 01754860219
          <br />
          <a href="mailto:ranzi.johann@gmail.com">ranzi.johann@gmail.com</a>
          <br />
          <a
            href="https://www.ortus.bz.it/"
            className="underline hover:text-secondary"
          >
            www.ortus.bz-it
          </a>
        </p>
        <h2
          className="text-2xl font-serif text-secondary mx-auto"
          dangerouslySetInnerHTML={{ __html: da.concept.title }}
        />
        <p className="text-xl text-default max-w-prose py-6 md:py-8 md:text-gray-600 mx-auto">
          Christian Anese
          <br />
          39012 Meran
          <br />
          Hl. Kreuzgasse 5
          <br />
          Tel <a href="tel:+393517338229">+39 351 733 8229</a>
          <br />
          MwSt. Nr. 03108370218
          <br />
          info@anese.me
        </p>
        <h2 className="text-2xl font-serif text-secondary">{da.photo.title}</h2>
        <p className="text-xl text-default max-w-prose py-6 md:py-8 md:text-gray-600 mx-auto">
          &copy; IDM Südtirol, Clemens Zahn
          <br />
          &copy; IDM Südtirol, Angelika Schwarz
          <br />
          &copy; IDM Südtirol, Marion Gelmini
          <br />
          &copy; Tourismusverein Nals
          <br />
          &copy; Hannes Krichler
        </p>
        <h2 className="text-2xl font-serif text-secondary">
          {da.liability.title}
        </h2>
        <p className="text-xl text-default max-w-prose py-6 md:py-8 md:text-gray-600 mx-auto">
          {da.liability.text}
        </p>
      </div>
    </Layout>
  );
}

export default Imprint;

export async function getServerSideProps({ query, locale }) {
  const intl = translations[locale];

  return {
    props: {
      intl,
    }, // will be passed to the page component as props
  };
}
