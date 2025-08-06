import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    console.log("CookieConsent check → value in localStorage:", consent);

    if (!consent) {
      console.log("No consent found → showing banner after delay");
      setTimeout(() => {
        setIsVisible(true);
      }, 300); // Delay before slide in
    } else if (consent === "accepted") {
      console.log("Consent already accepted → loading GA");
      loadGoogleAnalytics();
    } else {
      console.log("Consent declined → not loading GA");
    }
  }, []);

  const acceptCookies = () => {
    console.log("User accepted cookies");
    localStorage.setItem("cookieConsent", "accepted");
    loadGoogleAnalytics();
    setIsVisible(false);
  };

  const declineCookies = () => {
    console.log("User declined cookies");
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  const loadGoogleAnalytics = () => {
    if (window.gtag) {
      console.log("GA already loaded");
      return;
    }
    console.log("Loading Google Analytics...");
    const script1 = document.createElement("script");
    script1.src = `https://www.googletagmanager.com/gtag/js?id=G-KBZBY2LHRF`;
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

  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-dark text-white p-4 z-50 shadow-lg transform transition-all duration-500 ease-out
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
      `}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="text-sm">
          We use cookies to improve your experience and analyze site traffic.
          See our{" "}
          <a href="/privacy-policy" className="underline text-accent hover:brightness-110">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex gap-2 justify-center">
          <button
            onClick={declineCookies}
            className="bg-gray-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full font-semibold text-sm md:text-base hover:brightness-110 transition duration-200"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="bg-accent text-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full font-semibold text-sm md:text-base hover:brightness-110 transition duration-200"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
