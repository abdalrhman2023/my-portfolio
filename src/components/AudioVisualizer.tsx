import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const BAR_COUNT = 20;

function useIdleVisualizer(active: boolean) {
  const [bars, setBars] = useState<number[]>(Array(BAR_COUNT).fill(4));
  const rafRef = useRef<number>();

  useEffect(() => {
    if (!active) {
      setBars(Array(BAR_COUNT).fill(4));
      return;
    }

    const animate = () => {
      setBars(
        Array.from({ length: BAR_COUNT }, (_, i) => {
          const t = Date.now() / 400 + i * 0.5;
          return 4 + Math.abs(Math.sin(t) * 22 + Math.sin(t * 1.7) * 10);
        })
      );
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current!);
  }, [active]);

  return bars;
}

export default function AudioVisualizer() {
  const [active, setActive] = useState(false);
  const bars = useIdleVisualizer(active);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-40 flex items-end gap-2 bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-2xl"
    >
      <div className="flex items-end gap-0.5 h-8">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            animate={{ height: h }}
            transition={{ duration: 0.1, ease: 'easeOut' }}
            className={`w-1 rounded-full ${active ? 'bg-cyan-400' : 'bg-gray-600'}`}
            style={{ minHeight: 4 }}
          />
        ))}
      </div>
      <button
        onClick={() => setActive((v) => !v)}
        className={`ml-2 p-1.5 rounded-lg transition-all duration-200 ${
          active
            ? 'text-cyan-400 bg-cyan-400/10 hover:bg-cyan-400/20'
            : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
        }`}
        title={active ? 'Pause visualizer' : 'Animate visualizer'}
      >
        {active ? <Volume2 size={14} /> : <VolumeX size={14} />}
      </button>
    </motion.div>
  );
}
