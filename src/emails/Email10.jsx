import "./Email.css";
import React from "react";

export const metadata = {
  id: 10,
  date: "22. Mai 2025",
  subject: "Zusammenfassung Ihres Treffens",
  sender: "no-reply@manekin.dop",
};

export default function Email10() {
  const { date, subject, sender } = metadata;

  return (
    <div className="email-container">
      <a className="email-back-button" href="/">
        ← Zurück zum Posteingang
      </a>

      <div className="email-header">Datum: {date}</div>
      <div className="email-subject">Betreff: {subject}</div>
      <div className="email-from">Von: {sender}</div>

      <div className="email-body">
        <p>
          <strong>Teilnehmer:</strong> Investorengruppe (Anderson &amp; Co. Ventures,
          Blackridge Capital), Projektleiterin (Sophie Klein)
          <br />
          <strong>Dauer:</strong> 1 Stunde 15 Minuten
        </p>

        <p>
          <strong>1. Strukturelle Integrität &amp; Sicherheitsüberprüfungen</strong>
        </p>

        <p>
          Sophie Klein, bestätigte, dass die unabhängige statische Begutachtung im
          letzten Monat abgeschlossen wurde.
        </p>
        <p>
          Das Gebäude wurde als strukturell einwandfrei eingestuft, ohne unmittelbare
          Sicherheitsrisiken.
        </p>
        <p>
          Eine kleinere Verstärkung wird im östlichen Balkonbereich vorgenommen, da
          dort erste Anzeichen von Materialermüdung festgestellt wurden. Die
          Fertigstellung ist bis Mitte September geplant.
        </p>
        <p>
          Die Denkmalschutzbehörde hat alle bisher ausgewählten Materialien genehmigt.
        </p>
        <p>
          Anderson &amp; Co. erkundigte sich nach möglichen Branding-Optionen im
          Gebäude (z.&nbsp;B. Namensrechte für Lounges oder VIP-Logen). Dieses Thema
          wird in der nächsten Stakeholder-Sitzung weiter behandelt.
        </p>
      </div>
    </div>
  );
}
