// src/pages/_app.js
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
        {/* Your favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* (Optional) A page title will show if you navigate directly to "/" */}
        <title>Joe Capon Designs</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}
