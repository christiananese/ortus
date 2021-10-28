import Layout from "../components/Layout";
import translations from "../data/home";

function Imprint({ intl }) {
  return (
    <Layout title="Ortus" intl={intl}>
      <div className="flex flex-col justify-center items-center max-w-4xl mx-auto px-4 py-16 md:pt-24 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-secondary">
          Impressum
        </h1>
        <h2 className="text-2xl font-serif text-secondary text-center mt-4 md:mt-12">
          Eigentümer & verantwortlich für den Inhalt
        </h2>
        <p className="text-xl text-default max-w-prose py-6 md:py-8 md:text-gray-600 mx-auto">
          <strong>Johann Ranzi</strong>
          <br />
          Manteleweg 2 <br />
          39010 Nals
          <br />
          Südtirol - Italien
          <br />
          Tel <a href="tel:+393488744474">+39 348 8744474</a>
          <br />
          MwSt. Nr. 01754860219
          <br />
          <a href="mailto:ranzi.johann@gmail.com">ranzi.johann@gmail.com</a>
          <br />
          <a href="www.ortus.bz-it">www.ortus.bz-it</a>
        </p>
        <h2 className="text-2xl font-serif text-secondary mx-auto">
          &copy; Konzept &bull; Design &bull; Programmierung
        </h2>
        <p className="text-xl text-default max-w-prose py-6 md:py-8 md:text-gray-600 mx-auto">
          Christian Anese
          <br />
          39012 Meran
          <br />
          Hl. Kreuzgasse 5
          <br />
          Tel <a href="tel:+393517338229">+39 351 733 8229</a>
          <br />
          MwSt. Nr.
          <br />
          info@anese.me
        </p>
        <h2 className="text-2xl font-serif text-secondary">Fotos</h2>
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
          Haftung für Inhalte der Webseite und Hyperlinks
        </h2>
        <p className="text-xl text-default max-w-prose py-6 md:py-8 md:text-gray-600 mx-auto">
          Die bereitgestellten Informationen auf dieser Website wurden
          sorgfältig geprüft und werden regelmäßig aktualisiert. Trotzdem kann
          keine Garantie dafür übernommen werden, dass die auf dieser Website
          bereitgestellten Informationen vollständig, richtig und in jedem Fall
          aktuell sind. Dies gilt auch für alle Verbindungen („Links&quot;), auf
          die diese Website direkt oder indirekt verweist. Für die Inhalte der
          verlinkten Seiten haftet ausschließlich der Anbieter der jeweiligen
          Website.
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
