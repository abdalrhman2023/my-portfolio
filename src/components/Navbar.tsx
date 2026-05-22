import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-gray-950/70 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo('#home')} className="flex items-center gap-1 group">
          <span className="text-cyan-400 font-mono text-lg font-bold opacity-70 group-hover:opacity-100 transition-opacity duration-300">&lt;</span>
          <span className="text-white font-semibold tracking-tight text-[17px]">
            Abdelrahman
          </span>
          <span className="text-cyan-400 font-light tracking-tight text-[17px]">.dev</span>
          <span className="text-cyan-400 font-mono text-lg font-bold opacity-70 group-hover:opacity-100 transition-opacity duration-300">/&gt;</span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeSection === link.href.slice(1) ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
          <a
            href="https://github.com/abdelrahmanbadawi"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 text-sm px-4 py-2 rounded-full border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-200 flex items-center gap-2"
          >
            GitHub
          </a>
        </nav>

        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors p-2"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-gray-950/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-sm text-left py-2.5 px-3 rounded-lg transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://github.com/abdelrahmanbadawi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors py-2.5 px-3"
              >
                GitHub &rarr;
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
