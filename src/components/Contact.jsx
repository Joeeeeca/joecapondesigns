import React, { useEffect } from 'react';

export default function Contact({ className = '' }) {
  useEffect(() => {
    const emailLink = document.getElementById('email-link');
    const projectFormLink = document.getElementById('project-form-link');

    const handleEmailClick = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'contact_email_click', {
          event_category: 'contact',
          event_label: 'Email Link',
          value: 1,
        });
      }
    };

    const handleFormClick = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'project_form_click', {
          event_category: 'contact',
          event_label: 'Project Form Button',
          value: 1,
        });
      }
    };

    emailLink?.addEventListener('click', handleEmailClick);
    projectFormLink?.addEventListener('click', handleFormClick);

    return () => {
      emailLink?.removeEventListener('click', handleEmailClick);
      projectFormLink?.removeEventListener('click', handleFormClick);
    };
  }, []);

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className={`${className} py-24 bg-gray-50`}
    >
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <h2
          id="contact-heading"
          className="text-3xl md:text-4xl font-bold mb-6 text-dark"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          Get in touch
        </h2>

        <div
          id="contact-description"
          className="mb-8 text-dark max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>
            Have a project in mind? I’ve put together a quick questionnaire to help me understand your needs so we can hit the ground running.
          </p>
        </div>

        {/* Primary CTA */}
        <a
          id="project-form-link"
          href="https://docs.google.com/forms/d/e/1FAIpQLSd1WgbA33GUhJsmRPUL43GUk-WPjyedbvb7iZy0py9uGdWgdw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open project questionnaire form in a new tab"
          aria-describedby="contact-description"
          className="
            inline-block px-4 md:px-10 py-4 bg-accent text-dark font-semibold
            rounded-full shadow-lg transition hover:brightness-95 hover:shadow-black
            hover:shadow-md hover:-translate-y-1 focus:outline-none focus:ring-4
            focus:ring-border-accent/50
          "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Tell me about your project
        </a>

        {/* Secondary Email */}
        <div
          className="mt-6 text-[#1F2937]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Or email me directly at{' '}
          <a
            id="email-link"
            href="mailto:joecapon101@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send an email to Joe Capon"
            className="text-accent font-medium hover:underline focus:outline-none focus:ring-4 focus:ring-border-accent/50 rounded"
          >
            joecapon101@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
