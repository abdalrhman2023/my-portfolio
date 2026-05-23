import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, Tag } from 'lucide-react';
import type { Project } from '../data/projects';
import { Link } from 'react-router-dom';

interface Props {
  project: Project;
  index: number;
}

const categoryStyles: Record<string, { text: string; bg: string; border: string; glow: string }> = {
  'Computer Vision': {
    text: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/25',
    glow: 'cyan-400',
  },
  'Deep Learning': {
    text: 'text-sky-400',
    bg: 'bg-sky-400/10',
    border: 'border-sky-400/25',
    glow: 'sky-400',
  },
  'Machine Learning': {
    text: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/25',
    glow: 'emerald-400',
  },
};

export default function ProjectCard({ project, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-80, 80], [5, -5]), { stiffness: 250, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-80, 80], [-5, 5]), { stiffness: 250, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const style = categoryStyles[project.category] || categoryStyles['Computer Vision'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.94 }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative h-full"
      >
        {/* Dynamic glow border effect */}
        <div
          className={`absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
          style={{
            background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
            ['--tw-gradient-from' as string]: `rgb(6, 182, 212)`, // cyan-400
            ['--tw-gradient-to' as string]: `rgb(99, 102, 241)`, // indigo-500
          }}
        />
        <div className="absolute inset-px rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(60% 50% at 50% 30%, rgba(6, 182, 212, 0.2), transparent)`,
            }}
          />
        </div>

        {/* Card content */}
        <div className="relative z-10 h-full bg-gray-900/95 rounded-2xl overflow-hidden border border-white/[0.07] group-hover:border-transparent transition-colors duration-300 shine-effect">
          {/* Image */}
          <div className="relative h-44 overflow-hidden">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />

            <div className={`absolute top-3 left-3 flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full ${style.text} ${style.bg} border ${style.border}`}>
              <Tag size={10} />
              {project.category}
            </div>

            <div className="absolute top-3 right-3 text-[11px] text-gray-500 bg-gray-900/80 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/10">
              {project.year}
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-white font-semibold text-[17px] mb-2 group-hover:text-cyan-50 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-500 text-[13px] leading-relaxed mb-4 line-clamp-2">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tags.slice(0, 4).map((tag) => (
                <span key={tag} className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.04] text-gray-400 border border-white/[0.06]">
                  {tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="text-[11px] px-2 py-0.5 text-gray-600">+{project.tags.length - 4}</span>
              )}
            </div>

            <Link
              to={`/project/${project.id}`}
              className="flex items-center gap-1.5 text-[13px] font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
            >
              View Details
              <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
