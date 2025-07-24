  // src/components/Contact.jsx
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
      className={`
        ${className}
        py-24 bg-gray-50
      `}
    >
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-dark"
         data-aos="fade-up"
        data-aos-delay="0"
        >Get in touch</h2>
        <p className="mb-8 text-dark max-w-2xl mx-auto"
         data-aos="fade-up"
        data-aos-delay="100"
        >
          Have a project in mind? I’ve put together a quick questionnaire to help me understand your needs so we can hit the ground running.
        </p>

        {/* Primary CTA */}
        <a
        id="project-form-link"
        aria-label="Tell me about your project — open questionnaire form"
          href="https://docs.google.com/forms/d/e/1FAIpQLSd1WgbA33GUhJsmRPUL43GUk-WPjyedbvb7iZy0py9uGdWgdw/viewform"
          target="_blank"
          rel="noopener noreferrer"
           data-aos="fade-up"
        data-aos-delay="200"
          className="
            inline-block px-4 md:px-10 py-4 bg-accent text-dark font-semibold
            rounded-full shadow-lg transition hover:brightness-95 hover:shadow-black hover:shadow-md hover:-translate-y-1
            focus:outline-none focus:ring-4 focus:ring-border-accent/50
          "
        >
          Tell me about your project
        </a>

        {/* Secondary Email */}
        <div className="mt-6 text-[#1F2937]"
         data-aos="fade-up"
        data-aos-delay="300"
        >
          Or email me directly at{' '}
          <a
            href="mailto:joecapon101@gmail.com"
            id="email-link"
            aria-label="Send Joe Capon an email"
            target="_blank"
            className="text-accent font-medium hover:underline"
          >
            joecapon101@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
