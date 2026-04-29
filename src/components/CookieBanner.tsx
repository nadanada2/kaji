'use client';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consented = localStorage.getItem('cookie-consent');
    if (!consented) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1E3A5F] text-white p-4 z-50 flex justify-between items-center">
      <p className="text-sm">🍪 Ce site utilise des cookies pour améliorer votre expérience.</p>
      <button onClick={accept} className="bg-[#C9A84C] text-black px-4 py-2 rounded-full text-sm font-semibold">Accepter</button>
    </div>
  );
}