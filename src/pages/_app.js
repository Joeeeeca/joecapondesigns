// src/pages/_app.js  (or put inside pages/_document.js → <Head>)
import Head from 'next/head'
import '../styles/globals.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ once: true, duration: 600 })
  }, [])

  return (
    <>
      <Head>
        {/* Basic */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Joe Capon Designs — Freelance Web Developer</title>
        <meta
          name="description"
          content="I’m Joe Capon, a freelance web developer crafting fast, accessible, modern websites. Let’s build a beautiful web experience together."
        />
        <meta
          name="keywords"
          content="Joe Capon, web developer, freelance web developer, modern websites, accessible web design, front-end development, Tailwind CSS, Next.js"
        />
        <meta name="author" content="Joe Capon" />
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href="https://joecapondesigns.com/" />

        {/* Favicon */}
         <link rel="icon" type="image/png" href="/images/tab-icon.png" />

        {/* Open Graph / Facebook & LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://joecapondesigns.com/" />
        <meta property="og:title" content="Joe Capon Designs — Freelance Web Developer" />
        <meta
          property="og:description"
          content="I’m Joe Capon, a freelance web developer crafting fast, accessible, modern websites. Let’s build a beautiful web experience together."
        />
        <meta property="og:image" content="https://joecapondesigns.com/images/social-preview.png" />
        <meta property="og:site_name" content="Joe Capon Designs" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TheGamer_reacts" />
        <meta name="twitter:creator" content="@TheGamer_reacts" />
        <meta name="twitter:title" content="Joe Capon Designs — Freelance Web Developer" />
        <meta
          name="twitter:description"
          content="I’m Joe Capon, a freelance web developer crafting fast, accessible, modern websites. Let’s build a beautiful web experience together."
        />
        <meta name="twitter:image" content="https://joecapondesigns.com/images/social-preview.png" />

        {/* Theme color for mobile address bar */}
        <meta name="theme-color" content="#1F2937" />

        {/* (Optional) PWA manifest */}
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
      </Head>

      <Component {...pageProps} />
    </>
  )
}