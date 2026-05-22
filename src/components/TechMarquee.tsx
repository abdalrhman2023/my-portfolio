import { motion } from 'framer-motion';

const techs = [
  { name: 'Python', icon: '🐍' },
  { name: 'PyTorch', icon: '🔥' },
  { name: 'OpenCV', icon: '👁️' },
  { name: 'YOLOv8', icon: '⚡' },
  { name: 'Scikit-learn', icon: '📊' },
  { name: 'Streamlit', icon: '🎈' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'NumPy', icon: '🔢' },
  { name: 'Pandas', icon: '🐼' },
  { name: 'EasyOCR', icon: '📝' },
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const items = [...techs, ...techs];
  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex gap-4 shrink-0"
        animate={{ x: reverse ? ['0%', '50%'] : ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.07] text-gray-400 text-sm font-medium whitespace-nowrap hover:border-cyan-400/30 hover:text-gray-200 transition-colors duration-300"
          >
            <span className="text-base leading-none">{tech.icon}</span>
            <span>{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <div className="py-12 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />
      <div className="flex flex-col gap-3">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </div>
  );
}
