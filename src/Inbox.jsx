import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Inbox.css';

import { metadata as meta1 } from './emails/Email1';
import { metadata as meta2 } from './emails/Email2';
import { metadata as meta3 } from './emails/Email3';
import { metadata as meta4 } from './emails/Email4';
import { metadata as meta5 } from './emails/Email5';
import { metadata as meta6 } from './emails/Email6';
import { metadata as meta7 } from './emails/Email7';
import { metadata as meta8 } from './emails/Email8';
import { metadata as meta9 } from './emails/Email9';
import { metadata as meta10 } from './emails/Email10';

const emailList = [meta1, meta2, meta3, meta4, meta5, meta6, meta7, meta8, meta9, meta10];

const parseDate = (dateStr) => {
  const [day, monthName, year] = dateStr.split(' ');
  const months = {
    Januar: 0, Februar: 1, März: 2, April: 3, Mai: 4, Juni: 5,
    Juli: 6, August: 7, September: 8, Oktober: 9, November: 10, Dezember: 11
  };
  return new Date(parseInt(year), months[monthName], parseInt(day));
};

const sortedEmails = emailList.sort((a, b) => parseDate(b.date) - parseDate(a.date));

export default function Inbox() {
  return (
    <div className="inbox-container">
      <h1 className="inbox-title">Inbox</h1>

      <div className="inbox-header">
        <img
          src="https://cdn.shopify.com/s/files/1/0776/0707/6169/files/Zrzut_ekranu_2025-07-30_223233.png?v=1753907577"
          alt="Avatar"
        />
        <h1 className="inbox-title">Willkommen zurück, Leon!</h1>
      </div>

      <div className="inbox-wrapper">
        {sortedEmails.map((email) => (
          <Link to={`/email/${email.id}`} key={email.id} className="inbox-email">
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <Mail style={{ marginTop: '0.25rem' }} />
              <div>
                <p><span className="label">Von:</span> {email.sender}</p>
                <h2>{email.subject}</h2>
                <p><span className="label">Datum:</span> {email.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
