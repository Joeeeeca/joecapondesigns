// src/components/Hero.jsx
import React from 'react';

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
<h1
            className="fade-slide-up delay-0
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
              font-extrabold font-heading mb-6 leading-snug sm:leading-tight tracking-tight
              max-w-prose mx-auto md:mx-0
            "
          >
            Crafting beautiful web experiences
          </h1>

          <p
            className="fade-slide-up delay-1
              text-base font-body font-normal sm:text-lg md:text-xl text-light mb-8
              max-w-md sm:max-w-lg lg:max-w-xl mx-auto md:mx-0
              leading-relaxed
            "
          >
            I’m Joe, a freelance web developer specializing in fast, accessible,
            modern websites.
          </p>

          <div
            className="fade-slide-up delay-2 flex flex-col sm:flex-row items-center gap-4 mx-auto md:mx-0"
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
          </div>
        </div>

        {/* — Portrait — */}
        <div

  className="md:w-1/2 flex justify-center portrait-animate"
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
        priority
        loading="eager"
        decoding="async"
        className="
          object-cover rounded-full
          border-4 border-accent shadow-lg shadow-[#FFC75F]/80
        "
      />
    </picture>
  </div>
</div>
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
