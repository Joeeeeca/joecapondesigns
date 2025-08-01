// src/components/Projects.jsx
import React from 'react';
import Image from 'next/image';

export default function Projects({ className = '' }) {
  const projects = [
    {
      src: '/images/website-1.webp',
      alt: 'Guitar lessons platform on multiple devices',
      width: 600,
      height: 400,
      title: "George's Guitar Lessons",
      description:
        'A learning platform offering structured, step-by-step guitar lessons, practice tools, and progress tracking for players of all levels.',
      url: 'https://georgecaponguitarlessons.com/',
    },
    {
      src: '/images/website-2.webp',
      alt: 'Sports training site on multiple devices',
      width: 600,
      height: 400,
      title: 'Sports Mind Mastered',
      description:
        'A mental‑training site delivering visualization exercises, motivational content, and focus drills to help athletes achieve peak performance.',
      url: 'https://sportsmindmastered.com/',
    },
    {
      src: '/images/website-3.webp',
      alt: 'Health education platform on multiple devices',
      width: 600,
      height: 400,
      title: 'Your Health Education',
      description:
        'A health‑education resource offering curated articles, interactive quizzes, and video tutorials to promote wellness literacy.',
      url: 'https://project-three.example.com',
    },
  ];

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className={`${className} py-12 md:py-16`}
    >
      <div className="container mx-auto px-6 md:px-20 lg:px-8 xl:px-2">
        <h2
          id="projects-heading"
          className="text-3xl font-bold text-dark mb-8 text-center lg:text-left xl:text-center"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          My Projects
        </h2>

        {/* Semantic list for cards */}
        <ul
          role="list"
          className="grid gap-8 xxl:gap-10 md:grid-cols-1 lg:grid-cols-3 w-full max-w-xl lg:max-w-5xl xl:max-w-7xl xxl:max-w-[100rem] justify-center mx-auto"
        >
          {projects.map((project, idx) => {
            const titleId = `project-title-${idx}`;
            const descId = `project-desc-${idx}`;

            return (
              <li key={project.title} className="h-full">
                <a
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-labelledby={titleId}
                  aria-describedby={descId}
                  className="
                    group relative block h-full rounded-xl sm:mx-auto 
                    bg-white shadow-lg overflow-hidden
                    transform transition
                    hover:-translate-y-2 hover:shadow-2xl
                    focus:outline-none focus-visible:ring-4 focus-visible:ring-border-accent/50
                  "
                >
                  {/* 1) Gradient header with angled cut (decorative) */}
                  <div className="h-18 md:h-20 bg-gradient-to-r from-[#FFC75F] to-[#f3a006] relative overflow-hidden flex items-center">
                    <svg
                      className="absolute bottom-0 left-0 w-full h-6"
                      preserveAspectRatio="none"
                      viewBox="0 0 100 10"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M0,10 L100,0 L100,10 Z" fill="white" />
                    </svg>
                    <h3
                      id={titleId}
                      className="relative z-10 text-lg sm:text-xl font-semibold text-dark px-6 transform -rotate-3 sm:-rotate-2 md:-rotate-2 lg:-rotate-3 origin-top-left"
                    >
                      {project.title}
                    </h3>
                  </div>

                  {/* 2) Screenshot */}
                  <div className="relative px-6 md:px-8 lg:px-6 -mt-6 md:-mt-12 lg:-mt-8 mb-4">
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src={project.src}
                        alt={project.alt}
                        width={project.width}
                        height={project.height}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>

                  {/* 3) Description & CTA */}
                  <div className="px-6 lg:px-2 pb-6 flex flex-col flex-grow">
                    <p id={descId} className="text-dark flex-grow text-center font-body font-normal">
                      {project.description}
                    </p>
                    <span
                      className="
                        mt-6 inline-block 
                        bg-accent text-dark font-semibold 
                        px-4 py-2 rounded-full text-center
                        transition hover:bg-[#E5B554]
                      "
                    >
                      View Site →
                    </span>

                    {/* Visually hidden helper for SR: opens in new tab */}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
