import React, { useState } from 'react';
import './CookieBar.css';

function CookieBar() {
  const [showCookieBar, setShowCookieBar] = useState(true);

  const acceptCookies = () => {
    setShowCookieBar(false);
    localStorage.setItem('cookiesAccepted', 'true');
  };

  if (!showCookieBar || localStorage.getItem('cookiesAccepted')) {
    return null;
  }

  return (
    <div className="cookie-bar">
      <p className="cookie-bar__text">Ta strona wykorzystuje pliki cookie. Klikając "Akceptuj", zgadzasz się na wykorzystanie plików cookie.</p>
      <button className="cookie-bar__button" onClick={acceptCookies}>Akceptuj</button>
    </div>
  );
}

export default CookieBar;