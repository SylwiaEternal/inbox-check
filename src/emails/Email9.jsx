import "./Email.css";
import React from "react";

export const metadata = {
  id: 8,
  date: "18. Mai 2025",
  subject: "FLY HIGH! 50% OFF - Olly!",
  sender: "promo@olly.dop",
};

export default function Email8() {
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
          Wir bieten Ihnen exklusiv <strong>50 % Rabatt</strong>, damit Sie neue
          Reiseziele entdecken können!
        </p>

        <img
          src="https://cdn.shopify.com/s/files/1/0776/0707/6169/files/email_2_5.png?v=1753899009"
          alt="Olly 50 % Rabatt"
          className="email-image"
        />

        <p>
          Nutzen Sie Ihren exklusiven 50%-Rabatt (zzgl. Steuern) für die Buchung
          internationaler Flüge mit Abflügen zwischen dem 15. September und dem
          10. Dezember 2025!
        </p>
        <p>
          Zusätzlich erhalten Sie 60 % Rabatt auf Handgepäck und 12 kg
          Aufgabegepäck – exklusiv bei Auswahl des Light-Tarifs!
        </p>
        <p>
          <strong>Letzter Tag zur Einlösung dieses Angebots:</strong> 30. Juli 2025!
        </p>
        <p>Olly Team</p>
      </div>
    </div>
  );
}
