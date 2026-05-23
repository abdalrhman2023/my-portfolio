import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, categories } from '../data/projects';
import type { Category } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-sky-400/60 uppercase">Featured Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            <span className="gradient-text-animate">Projects</span>
          </h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-250 ${
                  activeCategory === cat
                    ? 'text-white shadow-lg shadow-cyan-500/30'
                    : 'text-gray-400 border border-white/10 hover:border-white/25 hover:text-gray-200 hover:bg-white/[0.03]'
                }`}
              >
                <span className="relative z-10">{cat}</span>
                {activeCategory === cat && (
                  <motion.span
                    layoutId="project-filter-active"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 -z-10"
                    transition={{ type: 'spring', stiffness: 500, damping: 32 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-96 flex flex-col items-center justify-center"
          >
            <p className="text-gray-600 text-sm mb-4">No projects in this category.</p>
            <button
              onClick={() => setActiveCategory('All')}
              className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Show All Projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
