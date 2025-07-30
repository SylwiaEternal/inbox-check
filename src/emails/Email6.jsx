import "./Email.css";
import React from "react";

export const metadata = {
  id: 6,
  date: "24. Mai 2025",
  subject: "KI-Warnung – Ungewöhnliche Aktivität erkannt (23. Mai 2025)",
  sender: "support@cctv-smartsecure.dop",
};

export default function Email6() {
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
          Unser automatisiertes Überwachungssystem hat in Ihrem Kameraarchiv einen
          Zeitraum mit potenziell ungewöhnlichem Verhalten erkannt:
        </p>

        <p>
          <strong>Datum:</strong> 23. Mai 2025
          <br />
          <strong>Zeitraum:</strong> 21:15 – 21:35 Uhr
          <br />
          <strong>Kamera:</strong> Hintereingang – Studio Bühne Ost
        </p>

        <p>
          Laut der KI-basierten Analyse besteht der Verdacht, dass eine Person das
          Bewusstsein verliert oder gesundheitliche Probleme zeigt. Die erkannten
          Bewegungsmuster deuten auf eine mögliche Notlage hin.
        </p>

        <p>
          <strong>Hinweis:</strong>
          <br />
          Es besteht ebenfalls die Möglichkeit, dass es sich um einen Fehlalarm
          handelt, da die KI gelegentlich unregelmäßige Bewegungen oder
          Lichtverhältnisse falsch interpretieren kann.
        </p>

        <p>
          Zur weiteren Prüfung des Vorfalls können Sie die aufgezeichneten Bilder über
          folgenden Link herunterladen:
        </p>

        <p>
          👉{' '}
          <a
            href="https://cdn.shopify.com/s/files/1/0776/0707/6169/files/email_cctv-23_Mai_2025_-_21_15_-_21_35.pdf?v=1753898975"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hier klicken, um die aufgezeichneten Bilder herunterzuladen
          </a>
        </p>

        <p>
          Gemäß unseren Nutzungsbedingungen übernehmen wir keine Verantwortung für den
          Inhalt oder die Interpretation des Materials sowie für etwaige Ereignisse,
          die im genannten Zeitraum stattgefunden haben könnten. Unser Dienst umfasst
          ausschließlich automatisierte Bildanalyse und Bereitstellung.
        </p>

        <p>
          Für technische Rückfragen steht Ihnen unser Support-Team jederzeit zur
          Verfügung.
        </p>

        <p>
          Mit freundlichen Grüßen
          <br />Ihr CCTV-Systemanbieter
        </p>
      </div>
    </div>
  );
}
