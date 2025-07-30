import "./Email.css";
import React from "react";

export const metadata = {
  id: 4,
  date: "15. Mai 2025",
  subject: "Hast du’s gelesen?",
  sender: "nina@studiob.dop",
};

export default function Email4() {
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
        <p>Leon,</p>
        <p>ich hoffe, du hast meine letzte Nachricht bekommen.</p>
        <p>Ich brauche eine Antwort — bald.</p>
        <p>Du weißt, wie ernst das ist.</p>
        <p>— N.</p>
      </div>
    </div>
  );
}
