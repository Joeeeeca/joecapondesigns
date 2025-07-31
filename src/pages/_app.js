// src/pages/_app.js
import Head from 'next/head';
import '../styles/globals.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ once: true, duration: 600 });
  }, []);

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Joe Capon Designs — Freelance Web Developer</title>
        <meta
          name="description"
          content="I’m Joe Capon, a freelance web developer crafting fast, accessible, modern websites. Let’s build a beautiful web experience together."
        />

<link rel="manifest" href="/manifest.json" />

        <meta
          name="keywords"
          content="Joe Capon, web developer, freelance web developer, modern websites, accessible web design, front-end development, Tailwind CSS, Next.js"
        />
        <meta name="author" content="Joe Capon" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://joecapondesigns.com/" />
      <link rel="icon" type="image/png" href="/images/tab-icon.png" />
<link rel="shortcut icon" href="/images/tab-icon.png" />
        <meta name="theme-color" content="#1F2937" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://joecapondesigns.com/" />
        <meta property="og:title" content="Joe Capon Designs — Freelance Web Developer" />
        <meta
          property="og:description"
          content="I’m Joe Capon, a freelance web developer crafting fast, accessible, modern websites."
        />
        <meta property="og:image" content="https://joecapondesigns.com/images/social-preview.png" />
        <meta property="og:site_name" content="Joe Capon Designs" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TheGamer_reacts" />
        <meta name="twitter:creator" content="@TheGamer_reacts" />
        <meta name="twitter:title" content="Joe Capon Designs — Freelance Web Developer" />
        <meta
          name="twitter:description"
          content="Let’s build a beautiful web experience together."
        />
        <meta name="twitter:image" content="https://joecapondesigns.com/images/social-preview.png" />

        {/* Structured Data (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Joe Capon",
              url: "https://joecapondesigns.com",
              jobTitle: "Freelance Web Developer",
              sameAs: [
                "https://github.com/joeeeeca",
                "https://www.linkedin.com/in/your-profile" // Replace if applicable
              ],
            }),
          }}
        />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KBZBY2LHRF"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KBZBY2LHRF', { debug_mode: true });
            `,
          }}
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
