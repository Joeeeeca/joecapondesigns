import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    } else if (consent === "accepted") {
      loadGoogleAnalytics();
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    loadGoogleAnalytics();
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  const loadGoogleAnalytics = () => {
    if (window.gtag) return; // already loaded
    const script1 = document.createElement("script");
    script1.src = `https://www.googletagmanager.com/gtag/js?id=G-KBZBY2LHRF`; // Replace with your GA ID
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-KBZBY2LHRF');
    `;
    document.head.appendChild(script2);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-dark text-white p-4 z-50 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          We use cookies to improve your experience and analyze site traffic.
          See our{" "}
          <a href="/privacy-policy" className="underline text-accent hover:brightness-110">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex gap-2">
          <button
            onClick={declineCookies}
            className="bg-gray-500 text-white px-4 py-2 rounded-full font-semibold hover:brightness-110 transition duration-200"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="bg-accent text-dark px-4 py-2 rounded-full font-semibold hover:brightness-110 transition duration-200"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
