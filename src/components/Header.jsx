// src/components/Header.jsx
import React, { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ['home', 'projects', 'about', 'contact'];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4">
      <nav
        className="container mx-auto flex flex-col px-6 lg:px-16"
        aria-label="Primary"
      >
        {/* Top Row */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-bold font-poppins text-gray-900">
            <a href="#home" aria-label="Go to home section">
              Joe Capon Designs
            </a>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-4 md:gap-8 lg:gap-10 text-gray-600">
            {links.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="group relative font-medium uppercase tracking-wide transition-colors duration-300 ease-out hover:text-[#FFC75F] text-sm"
                >
                  {id}
                  <span
                    className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#FFC75F] transition-all duration-300 ease-out group-hover:w-full"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden relative w-6 h-6 cursor-pointer"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            <span
              className={`absolute left-0 right-0 mx-auto block h-0.5 w-6 bg-gray-600 transform transition duration-300 origin-center ${
                menuOpen ? 'rotate-45' : 'translate-y-[-6px]'
              }`}
              aria-hidden="true"
            />
            <span
              className={`absolute left-0 right-0 mx-auto block h-0.5 w-6 bg-gray-600 transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
              aria-hidden="true"
            />
            <span
              className={`absolute left-0 right-0 mx-auto block h-0.5 w-6 bg-gray-600 transform transition duration-300 origin-center ${
                menuOpen ? '-rotate-45' : 'translate-y-[6px]'
              }`}
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Mobile Nav (inside <nav>) */}
        <ul
          id="primary-navigation"
          className={`md:hidden bg-white shadow-md transition-max-h duration-300 overflow-hidden ${
            menuOpen ? 'max-h-60 py-4' : 'max-h-0'
          }`}
        >
          {links.map((id) => (
            <li key={id} className="px-6 py-2">
              <a
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="block font-medium uppercase text-gray-700 hover:text-[#FFC75F] transition-colors duration-200"
              >
                {id}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
