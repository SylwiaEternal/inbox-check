import "./Email.css";
import React from "react";

export const metadata = {
  id: 7,
  date: "23. Mai 2025",
  subject: "Super promo unlocked - 10% OFF",
  sender: "promo@thunder.dop",
};

export default function Email7() {
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
        <p>Leon, wir möchten nicht, dass dir diese Aktion entgeht!</p>
        <p>
          Hier sind <strong>10 % RABATT</strong> auf die folgenden 5 Fahrten für dich.
          Denk daran: Wenn du irgendwo hin musst, kannst du dich auf uns verlassen –
          erst recht jetzt, wo wir dir diesen Rabatt anbieten. Nur ein paar Klicks
          trennen dich von schnellen und bequemen Fahrten. Probier unsere Fahrten
          jetzt zu noch besseren Preisen aus!
        </p>
        <p>
          Du hast dank deiner letzten Langstreckenfahrt am 23. Mai 2025 ein neues
          Rabatt-Level freigeschaltet.
        </p>
        <p>
          <strong>Ankunftszeit:</strong> 20:37 Uhr
        </p>
        <img
          src="https://cdn.shopify.com/s/files/1/0776/0707/6169/files/email_2_6.png?v=1753899009"
          alt="Rabattaktion Thunder"
          className="email-image"
        />
        <p>
          <em>*Achtung!</em> Der Rabatt ist zeitlich begrenzt und kann vom
          29.07.2025 bis zum 04.08.2025 eingelöst werden. Er gilt nur in ausgewählten
          Städten und Regionen – die Details findest du in der App. Der maximale
          Rabatt pro Fahrt beträgt 3 EUR. Gültig nur für Fahrten, die über die App
          gebucht werden – nicht gültig für E‑Scooter oder E‑Bikes.
        </p>
      </div>
    </div>
  );
}
