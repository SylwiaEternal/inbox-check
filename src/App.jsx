import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inbox from './Inbox';
import EmailViewer from './EmailViewer';

export default function App() {
  const [authorized, setAuthorized] = useState(false);
  const [input, setInput] = useState('');

  // On first load, check localStorage
  useEffect(() => {
    const stored = localStorage.getItem('authorized');
    if (stored === 'true') {
      setAuthorized(true);
    }
  }, []);

  const handleLogin = () => {
    if (input === 'Wolfgang') {
      setAuthorized(true);
      localStorage.setItem('authorized', 'true');
    } else {
      alert('Wrong password');
    }
  };

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-6 py-12">
        <div className="bg-white shadow-lg p-8 sm:p-10 rounded-2xl w-full max-w-md border border-gray-200">
          <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
            🔐 Passwort eingeben
          </h1>
          <input
            type="password"
            className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Passwort"
          />
          <button
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition"
            onClick={handleLogin}
          >
            Freischalten
          </button>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inbox />} />
        <Route path="/email/:id" element={<EmailViewer />} />
      </Routes>
    </Router>
  );
}
