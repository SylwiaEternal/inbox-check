import "./Email.css";
import React from "react";

export const metadata = {
  id: 3,
  date: "26. Mai 2025",
  subject: "Vielen Dank für das Gespräch",
  sender: "redaktion@tagesblick.de",
};

export default function Email3() {
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
          wir bedanken uns herzlich für das offene und vertrauensvolle Interview. Ihre
          Worte haben wichtige Perspektiven eröffnet und leisten einen bedeutenden
          Beitrag zur Berichterstattung.
        </p>
        <p>
          Bei Rückfragen oder Korrekturwünschen stehen wir Ihnen selbstverständlich
          jederzeit zur Verfügung.
        </p>
        <p>
          Mit freundlichen Grüßen<br />Ihre Redaktion Tagesblick
        </p>
      </div>
    </div>
  );
}
