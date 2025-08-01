// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function Hero({ className = '' }) {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className={`
        ${className}
        relative overflow-hidden flex items-center justify-center
        py-16 lg:py-24 text-light pt-16 lg:pt-24 pb-32 lg:pb-40 xxl:pt-40 xxl:pb-60
      `}
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 lg:px-16 space-y-12 md:space-y-0 md:space-x-8">
        {/* — Text Block — */}
        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <motion.h1
            id="hero-heading"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariant}
            className="
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
              font-extrabold font-heading mb-6 leading-snug sm:leading-tight tracking-tight
              max-w-prose mx-auto md:mx-0
            "
          >
            Crafting beautiful web experiences
          </motion.h1>

          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariant}
            className="
              text-base font-body font-normal sm:text-lg md:text-xl text-light mb-8
              max-w-md sm:max-w-lg lg:max-w-xl mx-auto md:mx-0
              leading-relaxed
            "
          >
            I’m Joe, a freelance web developer specializing in fast, accessible,
            modern websites.
          </motion.p>

          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariant}
            className="flex flex-col sm:flex-row items-center gap-4 mx-auto md:mx-0"
          >
            <a
              href="#projects"
              aria-label="View my project portfolio"
              className="
                block w-full sm:w-auto text-center rounded-full bg-accent text-dark
                px-6 py-3 sm:px-8 sm:py-4 md:px-4 text-base sm:text-lg font-semibold
                shadow-lg transition hover:brightness-110 hover:shadow-xl
                focus:outline-none focus:ring-4 focus:ring-border-accent/50
              "
            >
              View My Work
            </a>
            <a
              href="#contact"
              aria-label="Go to the contact section to get in touch"
              className="
                block w-full sm:w-auto text-center rounded-full border-2 border-accent text-accent
                px-6 py-3 sm:px-8 sm:py-4 md:px-4 text-base sm:text-lg font-semibold
                transition hover:bg-accent hover:text-white
                focus:outline-none focus:ring-4 focus:ring-border-accent/50
              "
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* — Portrait — */}
        <motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 0.6, type: 'spring', stiffness: 70 }}
  className="md:w-1/2 flex justify-center"
>
  <div
    className="relative aspect-square w-44 sm:w-64 md:w-72 lg:w-80 xl:w-90 mb-6 md:mb-0"
  >
    <picture>
      <source srcSet="/images/hero-image.webp" sizes="(max-width: 640px) 160px, (max-width: 1024px) 320px, 640px" type="image/webp" />
      <img
        src="/images/hero-image.png"
        alt="Portrait of Joe Capon"
        width="320"
        height="320"
        priority="true"
        loading="eager"
        decoding="async"
        className="
          object-cover rounded-full
          border-4 border-accent shadow-lg shadow-[#FFC75F]/80
        "
      />
    </picture>
  </div>
</motion.div>
      </div>

      {/* — Inverted‑V Divider — */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none mt-16"
        aria-hidden="true"
      >
        <svg
          className="block w-[calc(100%+1px)] h-[100px]"
          preserveAspectRatio="none"
          viewBox="0 0 1200 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 50 L600 0 L1200 50 L1200 100 L0 100 Z" fill="#f3f4f6" />
        </svg>
      </div>
    </section>
  );
}
