import "./Email.css";
import React from "react";

export const metadata = {
  id: 1,
  date: "11. Mai 2025",
  subject: "Gesundheitsbefund eines Mitarbeiters",
  sender: "praxis@dr-henninger.dop",
};

export default function Email1() {
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
          wir möchten Sie darüber informieren, dass der abschließende Bericht zur
          medizinischen Untersuchung Ihres Mitarbeiters nun vorliegt und zur
          Einsicht bereitsteht.
        </p>
        <p>
          Leider enthält der Bericht Hinweise auf gesundheitliche
          Einschränkungen, die wir für relevant im Hinblick auf die weitere
          Beschäftigung halten. Auch wenn solche Informationen nie leicht zu
          übermitteln sind, halten wir eine offene und transparente Kommunikation
          für unerlässlich. Das Passwort für die Datei ist der Vorname des Patienten.
        </p>
        <p>
          Gesundheitsbericht{' '}
          <a
            href="https://cdn.shopify.com/s/files/1/0776/0707/6169/files/email_medical_rep.pdf?v=1753898973"
            target="_blank"
            rel="noopener noreferrer"
          >
            herunterladen
          </a>
        </p>
        <p>
          Bitte vereinbaren Sie bei Bedarf einen Gesprächstermin mit unserer
          Praxis. Wir stehen Ihnen für Rückfragen, Beratung und weitere
          Informationen jederzeit zur Verfügung.
        </p>
        <p>
          Mit freundlichen Grüßen<br />Dr. med. A. Henninger
          <br />Allgemeinmedizin – Frankfurt am Main
        </p>
      </div>
    </div>
  );
}
