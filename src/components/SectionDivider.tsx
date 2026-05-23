import { motion } from 'framer-motion';

interface Props {
  variant?: 'wave' | 'gradient' | 'glow';
  flip?: boolean;
}

export default function SectionDivider({ variant = 'gradient', flip = false }: Props) {
  if (variant === 'wave') {
    return (
      <div className={`relative w-full h-24 overflow-hidden ${flip ? 'rotate-180' : ''}`}>
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60C240 20 480 100 720 60C960 20 1200 100 1440 60V120H0V60Z"
            fill="url(#wave-gradient)"
            fillOpacity="0.06"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="0">
              <stop stopColor="#22d3ee" />
              <stop offset="0.5" stopColor="#3b82f6" />
              <stop offset="1" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (variant === 'glow') {
    return (
      <div className="relative py-8">
        <motion.div
          className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-8 bg-cyan-400/20 blur-2xl rounded-full" />
      </div>
    );
  }

  // Default gradient
  return (
    <div className="relative py-6">
      <motion.div
        className="h-px w-full"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.2), rgba(59,130,246,0.2), rgba(34,211,238,0.2), transparent)',
        }}
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
    </div>
  );
}
