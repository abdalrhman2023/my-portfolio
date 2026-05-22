import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles } from 'lucide-react';

const phrases = [
  'Building Computer Vision Models',
  'Developing Object Detection Systems',
  'Scaling AI Solutions',
];

export default function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const phrase = phrases[currentPhrase];

    if (typing) {
      if (displayed.length < phrase.length) {
        timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 50);
      } else {
        timeout = setTimeout(() => setTyping(false), 2500);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 25);
      } else {
        setCurrentPhrase((p) => (p + 1) % phrases.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, currentPhrase]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-24">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.6) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-10 -left-64 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 right-0 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-400/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col justify-center"
          >
            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              <span className="flex items-center gap-1.5 text-xs font-medium text-cyan-400 tracking-widest uppercase border border-cyan-400/25 rounded-full px-3.5 py-1.5 bg-cyan-400/5 w-fit">
                <MapPin size={11} /> Cairo, Egypt
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-400/80 tracking-widest uppercase border border-emerald-400/25 rounded-full px-3.5 py-1.5 bg-emerald-400/5 w-fit">
                <Sparkles size={11} /> DEPI Trainee
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-3 leading-[1.05]"
            >
              Abdelrahman
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 tracking-tight mb-6"
            >
              Badawi
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-500 text-lg md:text-xl mb-8 font-light leading-relaxed"
            >
              AI Engineering Student — Machine Learning &amp; Computer Vision Specialist
            </motion.p>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="h-10 flex items-center mb-10"
            >
              <span className="text-lg md:text-xl font-light text-gray-300">
                {displayed}
                <span className="inline-block w-[2px] h-7 bg-cyan-400 ml-1 animate-pulse align-middle" />
              </span>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button
                onClick={scrollToProjects}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-base hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/40 hover:shadow-cyan-400/60 hover:-translate-y-1 hover:scale-[1.02] w-fit"
              >
                View My Work
              </button>
            </motion.div>
          </motion.div>

          {/* Right - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex justify-center items-center"
          >
            <div className="relative w-80 h-96 md:w-96 md:h-[480px] lg:w-[420px] lg:h-[540px]">
              {/* Gradient background blur */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-40 animate-pulse" />

              {/* Photo container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-cyan-400/30 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:border-cyan-400/50 transition-all duration-500">
                <img
                  src="/WhatsApp_Image_2024-10-30_at_10.28.02_ffc60e03-Photoroom.png"
                  alt="Abdelrahman Badawi"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/20 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gray-600">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}>
            <div className="w-5 h-9 rounded-full border-2 border-gray-600 flex items-start justify-center p-1.5">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                className="w-1 h-2 bg-cyan-400 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
