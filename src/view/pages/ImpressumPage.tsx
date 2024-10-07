import React from 'react';
import '../styles/ImpressumPageStyle.css'; // CSS für die Impressum-Seite importieren

const ImpressumPage: React.FC = () => {
    return (
        <div className="impressum-container"> {/* Container für die Impressum-Seite */}
            <h1 className="impressum-title">Impressum</h1> {/* Titel der Impressum-Seite */}
            <p className="impressum-section-header"><strong>Angaben gemäß § 5 TMG:</strong></p> {/* Abschnittsüberschrift */}
            <p className="impressum-address">
                Max Mustermann<br />
                Musterstraße 1<br />
                12345 Musterstadt
            </p>
            <p className="impressum-representative-header"><strong>Vertreten durch:</strong></p> {/* Abschnittsüberschrift */}
            <p className="impressum-representative">Max Mustermann</p> {/* Vertreter */}
            <p className="impressum-contact-header"><strong>Kontakt:</strong></p> {/* Abschnittsüberschrift */}
            <p className="impressum-contact-info">
                Telefon: 01234-56789<br />
                E-Mail: <a href="mailto:max@mustermann.de" className="impressum-email">max@mustermann.de</a> {/* E-Mail-Link */}
            </p>
            <p className="impressum-uid-header"><strong>Umsatzsteuer-ID:</strong></p> {/* Abschnittsüberschrift */}
            <p className="impressum-uid-info">
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                DE123456789
            </p>
            <p className="impressum-disclaimer-header"><strong>Haftungsausschluss:</strong></p> {/* Abschnittsüberschrift */}
            <p className="impressum-disclaimer">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
                Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, 
                die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="impressum-disclaimer-additional">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. 
                Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. 
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
            <p className="impressum-copyright-header"><strong>Urheberrecht:</strong></p> {/* Abschnittsüberschrift */}
            <p className="impressum-copyright">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. 
                Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p className="impressum-copyright-additional">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. 
                Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. 
                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
        </div>
    );
};

export default ImpressumPage;
