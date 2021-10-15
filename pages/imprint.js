import Layout from "../components/Layout";

function Imprint() {
  return (
    <Layout title="Ortus">
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
          Tel +39 0473 MwSt. Nr. 01754860219
          <br />
          info@ortus.bz.it
          <br />
          <a href="">www.ortus.bz-it</a>
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
          Tel +39 352
          <br />
          MwSt. Nr.
          <br />
          info@ortus.bz.it
          <br />
          <a href="">www.ortus.bz-it</a>
        </p>
        <h2 className="text-2xl font-serif text-secondary">Fotos</h2>
        <p className="text-xl text-default max-w-prose py-6 md:py-8 md:text-gray-600 mx-auto">
          Credit 1
          <br />
          Credit 2
        </p>
        <h2 className="text-2xl font-serif text-secondary">Copyright</h2>
        <p className="text-xl text-default max-w-prose py-6 md:py-8 md:text-gray-600 mx-auto">
          A,B,C die Katze lieft im Schnee
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
