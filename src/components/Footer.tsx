import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="border-t border-white/[0.06] pt-16 pb-8 px-6 bg-gray-950/[0.95]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-1 mb-4 group">
              <span className="text-cyan-400 font-mono text-base font-bold opacity-70 group-hover:opacity-100 transition-opacity duration-300">&lt;</span>
              <span className="text-white font-semibold text-sm">Abdelrahman</span>
              <span className="text-cyan-400 font-light text-sm">.dev</span>
              <span className="text-cyan-400 font-mono text-base font-bold opacity-70 group-hover:opacity-100 transition-opacity duration-300">/&gt;</span>
            </Link>
            <p className="text-gray-600 text-[11px] mb-1">AI Engineering Student</p>
            <p className="text-gray-600 text-xs leading-relaxed max-w-xs">
              Building intelligent computer vision systems and machine learning solutions. Based in Cairo, Egypt.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-gray-500 text-xs hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                { href: 'https://github.com/abdalrhman2023', icon: Github, label: 'GitHub' },
                { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
                { href: 'mailto:abdelrahman@example.com', icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-gray-900/60 border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-white hover:border-cyan-400/25 hover:bg-cyan-400/5 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <div className="mt-5">
              <p className="text-gray-600 text-[11px]">Cairo, Egypt</p>
              <p className="text-gray-700 text-[11px] mt-1">+20 1095508432</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-white/[0.05] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
        >
          <p className="text-gray-700 text-[11px]">
            &copy; {currentYear} Abdelrahman Badawi. All rights reserved.
          </p>
          <p className="text-gray-800 text-[10px] flex items-center gap-1">
            Made with <Heart size={10} className="text-cyan-400" /> and lots of coffee
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
