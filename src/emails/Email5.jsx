import "./Email.css";
import React from "react";

export const metadata = {
  id: 5,
  date: "24. Mai 2025",
  subject: "Einladung zum Interview – Berichterstattung zum Vorfall im Studio Bühne Ost",
  sender: "redaktion@tagesblick.de",
};

export default function Email5() {
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
        <p>Sehr geehrter Herr Westhoff,</p>
        <p>
          wir hoffen, Sie erreichen diese Zeilen inmitten dieser belastenden Zeit
          wohlauf.
        </p>
        <p>
          Im Rahmen unserer aktuellen Recherche zur Tragödie im Studio Bühne Ost
          möchten wir Sie herzlich zu einem Interview mit der Redaktion von
          Tagesblick einladen. Ziel ist es, unseren Leserinnen und Lesern einen
          authentischen und einfühlsamen Einblick in die Geschehnisse sowie in die
          Perspektiven der Beteiligten zu ermöglichen.
        </p>
        <p>
          Das Gespräch soll Raum für Ihre persönlichen Eindrücke, Gedanken zur
          Situation und, falls gewünscht, auch zur Zukunft des Theaters geben. Wir
          garantieren einen respektvollen, verantwortungsbewussten Rahmen ohne
          Spekulationen oder Sensationsdarstellung.
        </p>
        <p>
          <strong>Ort:</strong> Nach Wahl – telefonisch, per Videocall oder vor Ort
          in unserer Redaktion (Frankfurt am Main)
        </p>
        <p>
          Bitte lassen Sie uns wissen, ob und wann ein Gespräch für Sie denkbar wäre.
          Selbstverständlich stehen wir Ihnen vorab für Rückfragen oder
          Abstimmungen zur Verfügung.
        </p>
        <p>
          Mit besten Grüßen<br />Im Auftrag der Redaktion<br />Tagesblick – Gesellschaft & Ereignisse
        </p>
      </div>
    </div>
  );
}
