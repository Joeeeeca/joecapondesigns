// src/components/Header.jsx
import React, { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ['home', 'projects', 'about', 'contact'];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4">
      <nav className="container mx-auto flex items-center justify-between px-6 lg:px-16">
        {/* Logo */}
        <div className="font-bold text-gray-900">
          <a href="#home">Joe Capon Designs</a>
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
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#FFC75F] transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

     {/* Mobile hamburger */}
<button
  onClick={() => setMenuOpen(o => !o)}
  className="md:hidden relative w-6 h-6 cursor-pointer"
  aria-label="Toggle menu"
>
  {/* Top bar */}
  <span
    className={`
      absolute left-0 right-0 mx-auto block h-0.5 w-6 bg-gray-600
      transform transition duration-300 origin-center
      ${menuOpen ? 'rotate-45' : 'translate-y-[-6px]'}
    `}
  />
  {/* Middle bar */}
  <span
    className={`
      absolute left-0 right-0 mx-auto block h-0.5 w-6 bg-gray-600
      transition-opacity duration-300
      ${menuOpen ? 'opacity-0' : 'opacity-100'}
    `}
  />
  {/* Bottom bar */}
  <span
    className={`
      absolute left-0 right-0 mx-auto block h-0.5 w-6 bg-gray-600
      transform transition duration-300 origin-center
      ${menuOpen ? '-rotate-45' : 'translate-y-[6px]'}
    `}
  />
</button>
      </nav>

      {/* Mobile Nav */}
      <ul
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
    </header>
  );
}
