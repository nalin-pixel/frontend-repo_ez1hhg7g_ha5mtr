import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-fuchsia-400 via-violet-500 to-indigo-500" />
            <span className="font-semibold tracking-tight text-white text-lg">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-violet-200 to-indigo-200">Shyne</span> Studio
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white transition shadow-sm"
            >
              Start a project
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white focus:outline-none"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-sm text-white/90">
              <a href="#services" className="px-2 py-2 rounded-lg hover:bg-white/10" onClick={() => setOpen(false)}>Services</a>
              <a href="#work" className="px-2 py-2 rounded-lg hover:bg-white/10" onClick={() => setOpen(false)}>Work</a>
              <a href="#contact" className="px-2 py-2 rounded-lg hover:bg-white/10" onClick={() => setOpen(false)}>Contact</a>
              <a href="#contact" className="px-2 py-2 rounded-lg bg-white/10 border border-white/20" onClick={() => setOpen(false)}>Start a project</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
