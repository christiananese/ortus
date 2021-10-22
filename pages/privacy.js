import Layout from "../components/Layout";
import translations from "../data/home";

function Privacy({ intl }) {
  return (
    <Layout title="Ortus" intl={intl}>
      <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto px-4 py-16 md:pt-24">
        <h1
          className="text-4xl md:text-5xl font-serif text-secondary col-span-2 text-center"
          data-aos="fade-down"
        >
          Datenschutzbestimmungen
        </h1>
        <h2 className="text-3xl font-serif text-secondary col-span-2 text-center">
          Aufklärungsschreiben im Sinne des gesetzesvertretenden Dekretes vom
          30.06.2003 Nr. 196 „Datenschutzkodex“
        </h2>
        <p className="text-xl text-default max-w-prose py-6 md:max-w-screen-md md:py-8 md:text-gray-600 col-span-2 text-center mx-auto">
          In Sinne des Art. 13 des gesetzesvertretenden Dekrets Nr. 196 vom 30.
          Juni 2003 INFORMIEREN wir darüber, dass das Unternehmen Ranzi Johann
          persönliche Daten von Kunden und Lieferanten sowie Daten von Personen
          verarbeitet, die unserer Firma ihre Personalien willentlich
          (persönlich, telefonisch, per Fax oder per E-Mail) sowie durch
          Registrierung auf unserer Webseite mitteilen, sowie von Personen,
          deren Daten durch Dritte, zum Beispiel bei der Erfassung von externen
          Daten für geschäftliche Informationen, öffentlichen Verzeichnissen
          usw. übernommen wurden, wobei es sich im letzteren Fall ausschließlich
          um persönliche Daten gemeiner/gewöhnlicher Art und Natur handelt.
          Unser Betrieb garantiert im Rahmen der gesetzlichen Vorgaben, dass die
          Verarbeitung der persönlichen Daten unter Berücksichtigung der
          grundlegenden Rechte und Freiheiten sowie der Würde des Betroffenen,
          mit besonderem Bezug auf die Geheimhaltung, die persönliche Identität
          und das Recht auf Schutz der persönlichen Daten, erfolgt.
        </p>
        <h2 className="text-3xl font-serif text-secondary col-span-2 text-center  mx-auto">
          Ziel- und Zweckstellungen bei der Datenverarbeitung
        </h2>
        <p className="text-xl text-default max-w-prose py-6 md:max-w-screen-md md:py-8 md:text-gray-600 col-span-2 mx-auto">
          <ul className="list-disc">
            <li>
              Erfüllung von gesetzlichen Pflichten, Pflichten aus Verordnungen,
              Gemeinschaftsnormen sowie zivil- und steuerrechtlichen Gesetzen
            </li>
            <li>
              Erfüllung eventueller vertraglicher Verpflichtungen gegenüber dem
              Betroffenen
            </li>
            <li>
              Erfüllung von Tätigkeiten in Verbindung mit der Geschäftstätigkeit
              unserer Firma, wie das Ausfüllen von internen Statistiken, zur
              Rechnungslegung sowie zur Führung der
              Kunden-/Lieferantenbuchhaltung
            </li>
            <li>
              Zielstellungen geschäftlicher Art wie die Zusendung von
              Geschäftsinformationen und Werbematerial (per Post, Fax und
              E-Mail), Marketing und Marktuntersuchungen
            </li>
            <li>Schutz der Forderungen und Verwaltung der Verbindlichkeiten</li>
            <li>
              Zielstellungen hinsichtlich Versicherungen, insbesondere
              Kreditversicherungen
            </li>
          </ul>
        </p>
        <h2 className="text-3xl font-serif text-secondary col-span-2 text-center  mx-auto">
          Bereich der Bekanntmachung und Verbreitung der Daten:
        </h2>
        <p className="text-xl text-default max-w-prose py-6 md:max-w-screen-md md:py-8 md:text-gray-600 col-span-2 text-center mx-auto">
          In Bezug auf die oben angegebenen Zielstellungen werden Ihre
          persönlichen Daten bei Bedarf weitergeleitet
          <ul>
            <li>
              an die öffentlichen Verwaltungen und Behörden, wenn dies
              gesetzlich vorgesehen ist
            </li>
            <li>
              an Kreditinstitute, mit denen unsere Firma Geschäftsbeziehungen
              zur Verwaltung von Forderungen/Verbindlichkeiten und zur
              Finanzierungsvermittlung unterhält
            </li>
            <li>
              an alle jenen natürlichen und/oder juristischen, öffentlichen
              und/oder privaten Personen (Rechts-, Verwaltungs- und
              Steuerberatungsbüros, Gerichte, Handelskammern usw.), wenn sich
              die Weiterleitung als notwendig oder zur Ausübung unserer
              Tätigkeit zweckdienlich erweist.
            </li>
            <li>
              an Lieferanten/Hersteller, wenn dies für die Registrierung der
              Produkte erforderlich ist.
            </li>
          </ul>
          Die von unserem Betrieb verarbeiteten, persönlichen Daten unterliegen
          nicht der Verbreitung.
        </p>
        <h2
          className="text-3xl font-serif text-secondary col-span-2 text-center"
          data-aos="fade-down"
        >
          Art der Datenverarbeitung:
        </h2>
        <p className="text-xl text-default max-w-prose py-6 md:max-w-screen-md md:py-8 md:text-gray-600 col-span-2 text-center mx-auto">
          Die Datenverarbeitung kann mit oder ohne Hilfe elektronischer, auf
          jeden Fall automatischer Mittel erfolgen und umfasst alle im Art. 4,
          Absatz 1, Buchstabe a des gesetzesvertretenden Dekretes Nr. 196 vom
          30. Juni 2003 vorgesehenen und für die betreffende Datenverarbeitung
          erforderlichen Vorgänge. In jedem Fall wird die Datenverarbeitung
          unter Einhaltung aller Sicherheitsmaßnahmen durchgeführt, die deren
          Sicherheit und Geheimhaltung gewährleisten.
        </p>
        <h2 className="text-3xl font-serif text-secondary col-span-2 text-center">
          Cookies
        </h2>
        <p className="text-xl text-default max-w-prose py-6 md:max-w-screen-md md:py-8 md:text-gray-600 col-span-2 text-center mx-auto">
          Die Internetseiten verwenden an mehreren Stellen so genannte Cookies.
          Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und
          sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem
          Rechner abgelegt werden und die Ihr Browser speichert. Die meisten der
          von uns verwendeten Cookies sind so genannte
          &quot;Session-Cookies&quot;. Sie werden nach Ende Ihres Besuchs
          automatisch gelöscht. Cookies richten auf Ihrem Rechner keinen Schaden
          an und enthalten keine Viren.
        </p>
        <h2
          className="text-3xl font-serif text-secondary col-span-2 text-center"
          data-aos="fade-down"
        >
          Rechte des Betroffenen
        </h2>
        <p className="text-xl text-default max-w-prose py-6 md:max-w-screen-md md:py-8 md:text-gray-600 col-span-2 text-center mx-auto">
          Das Datenschutzgesetz verleiht dem Betroffenen die Möglichkeit zur
          Ausübung bestimmter Rechte gemäß Art. 7. Im Einzelnen hat er das
          Recht, darüber Auskunft zu erhalten, ob und welche Daten über ihn
          vorhanden sind und in verständlicher Form nähere Angaben über diese
          Daten, deren Herkunft und den Grund und Zweck ihrer Verarbeitung zu
          erfahren, sowie Angaben über Inhaber und Verantwortliche der
          Verarbeitung und Personen und Kategorien von Personen, denen diese
          Daten möglicherweise übermittelt werden. Der Betroffene hat das Recht,
          seine Daten zu aktualisieren, zu berichtigen und zu ergänzen sowie zu
          beantragen, dass die Daten gelöscht, gesperrt und in anonyme Daten
          umgewandelt werden, falls die Verarbeitung gegen die gesetzlichen
          Bestimmungen verstößt. Er hat das Recht, sich aus gerechtfertigtem
          Grund gänzlich oder zum Teil der Verarbeitung seiner Daten zu
          widersetzen, und ohne gerechtfertigten Grund, wenn Daten zum Zwecke
          der Handelsinformation, des Versands von Werbematerial, des
          Direktverkaufs, zu Markt und Meinungsforschung verwendet werden. Die
          Rechte gemäß Art. 7 können seitens des Betroffenen oder einer von ihm
          beauftragten Person, mittels Anfrage an den Verantwortlichen der
          Datenverarbeitung – Herrn Ranzi Johann, Manteleweg, 2 - 39010 Nals -
          mit Einschreiben oder E-Mail an ranzi.johann@gmail.com geltend gemacht
          werden.
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
