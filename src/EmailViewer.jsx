import React from 'react';
import { useParams } from 'react-router-dom';
import Email1 from './emails/Email1';
import Email2 from './emails/Email2';
import Email3 from './emails/Email3';
import Email4 from './emails/Email4';
import Email5 from './emails/Email5';
import Email6 from './emails/Email6';
import Email7 from './emails/Email7';
import Email8 from './emails/Email8';
import Email9 from './emails/Email9';
import Email10 from './emails/Email10';

const emailMap = {
  '1': <Email1 />,
  '2': <Email2 />,
  '3': <Email3 />,
  '4': <Email4 />,
  '5': <Email5 />,
  '6': <Email6 />,
  '7': <Email7 />,
  '8': <Email8 />,
  '9': <Email9 />,
  '10': <Email10 />,
};

export default function EmailViewer() {
  const { id } = useParams();
  const email = emailMap[id];

  if (!email) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <p>Diese Nachricht existiert nicht.</p>
      </div>
    );
  }

  return <div className="min-h-screen bg-gray-50 p-6">{email}</div>;
}
