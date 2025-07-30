import "./Email.css";
import React from "react";

export const metadata = {
  id: 2,
  date: "14. Mai 2025",
  subject: "Das bleibt unter uns",
  sender: "nina@studiob.dop",
};

export default function Email2() {
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
        <p>Lieber Leon,</p>
        <p>ich brauche deine Hilfe – und zwar dringend.</p>
        <p>
          Beim Stückewettbewerb gibt es ein Problem. Lena hat ihr Skript viel zu spät
          eingereicht, aber das scheint sie nicht zu stören. Denn jetzt hat sie mich in
          eine Lage gebracht, aus der ich alleine nicht mehr rauskomme – und ich muss
          dafür sorgen, dass sie trotzdem gewinnt. Es geht nicht um Qualität oder
          Fairness. Aber wenn sie leer ausgeht, bin ich diejenige, die es ausbaden
          muss.
        </p>
        <p>
          Ich kann dir im Moment nicht alles erklären. Nur so viel: Sie hat etwas gegen
          mich in der Hand – etwas, das auf keinen Fall ans Licht kommen darf.
        </p>
        <p>
          Du hast noch Kontakte. Ein diskretes Wort zur richtigen Zeit, das reicht schon.
          Elissa wird enttäuscht sein, ja – aber sie wird sich erholen. Ich nicht.
        </p>
        <p>
          Du musst das nicht verstehen. Du musst nur handeln. Und zwar schnell.
        </p>
        <p>
          Bitte zwing mich nicht dazu, dich an das zu erinnern, was ich einmal im
          Vertrauen über Wolfgang gesagt habe. Ich würde nie wollen, dass ihm etwas
          zustößt. Aber… Druck verändert Menschen. Und ich stehe unter Druck.
        </p>
        <p>
          Du weißt, was auf dem Spiel steht. Du hast immer gesagt, du schützt die, die
          dir wichtig sind.
        </p>
        <p>
          Jetzt ist der Moment, das zu beweisen.
        </p>
        <p>— Nina</p>
      </div>
    </div>
  );
}
