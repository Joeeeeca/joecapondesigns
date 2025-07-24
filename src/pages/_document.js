// src/pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        {/* Preconnect to Google Fonts (if used) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

        {/* Optional: PWA / Manifest support */}
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
