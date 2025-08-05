// src/components/CookieConsent.jsx
import { useState, useEffect } from "react";

const GA_ID = "G-KBZBY2LHRF"; // keep your real ID here

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // only run in client
    const consent = typeof window !== "undefined" && localStorage.getItem("cookieConsent");
    if (!consent) {
      // wait a tick to avoid jank on first paint
      requestAnimationFrame(() => setIsVisible(true));
    } else if (consent === "accepted") {
      loadGoogleAnalytics();
    }
  }, []);

  const loadGoogleAnalytics = () => {
    if (typeof window === "undefined") return;
    // guard against double injection
    if (window.__ga_loaded) return;
    window.__ga_loaded = true;

    // inject the external script
    const s1 = document.createElement("script");
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    s1.async = true;
    document.head.appendChild(s1);

    // inject the init script
    const s2 = document.createElement("script");
    s2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}', { anonymize_ip: true });
    `;
    document.head.appendChild(s2);
  };

  const acceptCookies = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cookieConsent", "accepted");
    }
    loadGoogleAnalytics();
    setIsVisible(false);
  };

  const declineCookies = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cookieConsent", "declined");
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-live="polite"
      className="fixed bottom-6 left-0 right-0 flex justify-center z-50 px-4"
    >
      <div
        className="max-w-5xl w-full bg-dark text-white p-4 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-4
                   transform opacity-0 translate-y-4 animate-enter"
        style={{ animationFillMode: "forwards", animationDuration: "260ms", animationTimingFunction: "cubic-bezier(.2,.9,.2,1)" }}
      >
        <p className="text-sm flex-1">
          We use cookies to improve your experience and to analyze site traffic. Read our{" "}
          <a href="/privacy-policy" className="underline text-accent hover:brightness-110">
            Privacy Policy
          </a>
          .
        </p>

        <div className="flex gap-2">
          <button
            onClick={declineCookies}
            className="px-4 py-2 rounded-full bg-gray-500 text-white font-semibold hover:brightness-110 transition"
          >
            Decline
          </button>

          <button
            onClick={acceptCookies}
            className="px-4 py-2 rounded-full bg-accent text-dark font-semibold hover:brightness-110 transition"
          >
            Accept
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes enter {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-enter {
          animation-name: enter;
        }
      `}</style>
    </div>
  );
}
