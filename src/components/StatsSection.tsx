import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FolderGit2, GraduationCap, Award, Briefcase } from 'lucide-react';

interface Stat {
  icon: typeof FolderGit2;
  value: number;
  suffix: string;
  label: string;
  color: string;
  decimals?: number;
}

const stats: Stat[] = [
  { icon: FolderGit2, value: 4, suffix: '+', label: 'Projects Built', color: 'from-cyan-400 to-blue-500' },
  { icon: GraduationCap, value: 3.47, suffix: '', label: 'GPA / 4.00', color: 'from-emerald-400 to-teal-500', decimals: 2 },
  { icon: Award, value: 4, suffix: '+', label: 'Certifications', color: 'from-sky-400 to-indigo-500' },
  { icon: Briefcase, value: 1, suffix: '', label: 'Internship', color: 'from-purple-400 to-pink-500' },
];

function useCountUp(target: number, duration: number, inView: boolean, decimals = 0) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    const startTime = Date.now();
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return decimals > 0 ? count.toFixed(decimals) : Math.round(count).toString();
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useCountUp(stat.value, 1800 + index * 200, isInView, stat.decimals);
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className="relative group"
    >
      <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-br from-cyan-400/15 to-blue-500/15" />
      <div className="relative bg-gray-900/60 border border-white/[0.06] rounded-2xl p-6 md:p-8 hover:border-white/15 transition-all duration-300 text-center">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
          <Icon size={22} className="text-white" />
        </div>
        <div className="text-3xl md:text-4xl font-bold text-white mb-1 tabular-nums">
          {count}
          <span className="text-cyan-400">{stat.suffix}</span>
        </div>
        <p className="text-gray-500 text-xs md:text-sm font-medium uppercase tracking-wider">{stat.label}</p>
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/[0.03] to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
