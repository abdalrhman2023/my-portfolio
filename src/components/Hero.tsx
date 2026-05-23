import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, Download } from 'lucide-react';

const phrases = [
  'Building Computer Vision Models',
  'Developing Object Detection Systems',
  'Scaling AI Solutions',
];

// Word-by-word reveal animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

function AnimatedWords({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {text.split(' ').map((word, i) => (
        <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.3em]">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

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

      {/* Animated gradient mesh blobs */}
      <div className="absolute top-10 -left-64 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none gradient-blob" />
      <div className="absolute -bottom-32 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none gradient-blob-delay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-400/5 rounded-full blur-[180px] pointer-events-none gradient-blob-slow" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none gradient-blob-delay" />

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
                <MapPin size={11} /> Mansoura, Egypt
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-400/80 tracking-widest uppercase border border-emerald-400/25 rounded-full px-3.5 py-1.5 bg-emerald-400/5 w-fit">
                <Sparkles size={11} /> DEPI Trainee
              </span>
            </motion.div>

            {/* Name — with smooth text reveal */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-3 leading-[1.05]">
              <AnimatedWords text="Abdelrahman" />
            </h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              <span className="gradient-text-animate">Badawi</span>
            </motion.h2>

            {/* Subtitle — word by word */}
            <p className="text-gray-500 text-lg md:text-xl mb-8 font-light leading-relaxed">
              <AnimatedWords text="AI Engineering Student — Machine Learning & Computer Vision Specialist" />
            </p>

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

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={scrollToProjects}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-base hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/40 hover:shadow-cyan-400/60 hover:-translate-y-1 hover:scale-[1.02] w-fit"
              >
                View My Work
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 text-gray-300 font-semibold text-base hover:text-white hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-300 hover:-translate-y-1 w-fit"
              >
                <Download size={16} />
                Download CV
              </a>
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
              {/* Gradient background blur — animated */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 rounded-3xl blur-2xl opacity-40 gradient-blob" />

              {/* Photo container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-cyan-400/30 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:border-cyan-400/50 transition-all duration-500">
                <img
                  src="/profile-photo.png"
                  alt="Abdalrhman Badawi"
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
