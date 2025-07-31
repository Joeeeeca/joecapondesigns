import React, { useEffect } from 'react';

export default function About({ className = '' }) {
  useEffect(() => {
    const aboutFormButton = document.getElementById('about-form-button');
    const handleClick = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'about_form_click', {
          event_category: 'cta',
          event_label: 'About Form Button',
          value: 1,
        });
      }
    };

    if (aboutFormButton) {
      aboutFormButton.addEventListener('click', handleClick);
    }

    return () => {
      if (aboutFormButton) {
        aboutFormButton.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className={`
        ${className}
        relative bg-dark text-light
        pt-[170px] md:pt-[178px]
        pb-16 md:pb-24
        overflow-hidden
      `}
    >
      {/* Top “V” Divider (decorative) */}
      <div
        className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none"
        style={{ height: '100px' }}
      >
        <svg
          className="block w-[calc(100%+1px)] h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M0 0 L1200 0 L1200 50 L600 100 L0 50 Z" fill="#f3f4f6" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-16 flex flex-col items-center text-center">
        <h2
          id="about-heading"
          className="text-3xl md:text-4xl font-bold mb-6 text-light"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          About Me
        </h2>

        <div
          role="group"
          aria-describedby="about-description"
          id="about-description"
          className="max-w-2xl mx-auto space-y-6 mb-8 text-light"
        >
          <p data-aos="fade-up" data-aos-delay="100">
            I’m Joe, a <strong className="text-white">24‑year‑old junior web developer</strong> with a passion for creativity and continuous learning. My journey began in college with HTML and CSS, and since then I’ve dedicated myself to expanding my skill set and growing as a developer.
          </p>
          <p data-aos="fade-up" data-aos-delay="200">
            Whether I’m prototyping in Figma, optimizing performance, or writing accessible, semantic markup, I thrive on striking the right balance between form and function. I’m always eager to tackle new challenges and refine my craft.
          </p>
          <p data-aos="fade-up" data-aos-delay="300">
            Interested in working together? Click the button below to tell me about your project via a short questionnaire—whether you need a rebuild of an existing site or a brand‑new build, this will help me understand your scope and next steps.
          </p>
        </div>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd1WgbA33GUhJsmRPUL43GUk-WPjyedbvb7iZy0py9uGdWgdw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          id="about-form-button"
          aria-label="Tell me about your project (opens in a new tab)"
          aria-describedby="about-description"
          className="
            inline-block text-dark px-4 md:px-8 py-3 rounded-full bg-accent
            font-semibold transition
            hover:brightness-95 hover:-translate-y-1 hover:shadow-md hover:shadow-white
            focus:outline-none focus:ring-4 focus:ring-border-accent/50
          "
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Let's work together
        </a>
      </div>
    </section>
  );
}
