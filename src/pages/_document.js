// src/pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        {/* Preload LCP image */}
<link
  rel="preload"
  as="image"
  href="/images/hero-image.webp"
  type="image/webp"
/>

 {/* Preload Fonts */}
  <link
    rel="preload"
    href="/fonts/Poppins/Poppins-Regular.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
  <link
    rel="preload"
    href="/fonts/Poppins/Poppins-Bold.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
  <link
    rel="preload"
    href="/fonts/Roboto/static/Roboto-Regular.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
  <link
    rel="preload"
    href="/fonts/Roboto/static/Roboto-Bold.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
