import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Tag, Calendar, Zap } from 'lucide-react';
import { projects } from '../data/projects';

const categoryColors: Record<string, string> = {
  'Computer Vision': 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  'Deep Learning': 'text-sky-400 bg-sky-400/10 border-sky-400/20',
  'Machine Learning': 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-500">
        <p className="text-lg mb-4">Project not found.</p>
        <Link to="/" className="text-cyan-400 hover:text-cyan-300 text-sm">
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  const otherProjects = projects.filter((p) => p.id !== id).slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen"
    >
      {/* Hero Image */}
      <div className="relative h-[55vh] min-h-[360px] overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-gray-950/30" />

        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          onClick={() => navigate(-1)}
          className="absolute top-24 left-6 md:left-12 flex items-center gap-2 text-sm text-gray-300 hover:text-white bg-gray-900/60 backdrop-blur-sm border border-white/10 px-3 py-2 rounded-full transition-colors duration-200"
        >
          <ArrowLeft size={14} />
          Back
        </motion.button>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 mb-3"
            >
              <span className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${categoryColors[project.category]}`}>
                <Tag size={10} />
                {project.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-gray-500">
                <Calendar size={11} /> {project.year}
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-white"
            >
              {project.title}
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Short description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-lg leading-relaxed font-light"
            >
              {project.shortDescription}
            </motion.p>

            {project.context && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="flex items-start gap-3 bg-cyan-400/5 border border-cyan-400/15 rounded-xl px-5 py-4"
              >
                <Zap size={15} className="text-cyan-400 mt-0.5 shrink-0" />
                <p className="text-cyan-300/80 text-sm leading-relaxed">{project.context}</p>
              </motion.div>
            )}

            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-white font-semibold text-lg mb-3">The Problem</h2>
              <p className="text-gray-400 text-sm leading-[1.9]">{project.problem}</p>
            </motion.div>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <h2 className="text-white font-semibold text-lg mb-3">My Role & Approach</h2>
              <p className="text-gray-400 text-sm leading-[1.9]">{project.role}</p>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            {/* Tech Stack */}
            <div className="bg-gray-900/60 border border-white/[0.07] rounded-xl p-5">
              <h3 className="text-white font-medium text-sm mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.05] text-gray-300 border border-white/[0.07] font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white text-sm font-medium hover:bg-white/[0.1] hover:border-white/20 transition-all duration-200"
              >
                <Github size={15} />
                View Source Code
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-cyan-400 text-gray-950 text-sm font-semibold hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/20"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
            </div>
          </motion.aside>
        </div>

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-20 pt-10 border-t border-white/[0.06]"
          >
            <h2 className="text-white font-semibold text-lg mb-6">Other Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherProjects.map((p) => (
                <Link
                  key={p.id}
                  to={`/project/${p.id}`}
                  className="group flex gap-4 bg-gray-900/50 border border-white/[0.06] rounded-xl p-4 hover:border-cyan-400/20 hover:bg-gray-900/70 transition-all duration-300"
                >
                  <img src={p.coverImage} alt={p.title} className="w-16 h-16 rounded-lg object-cover shrink-0" />
                  <div className="min-w-0">
                    <h3 className="text-white text-sm font-medium group-hover:text-cyan-50 transition-colors truncate">
                      {p.title}
                    </h3>
                    <p className="text-gray-500 text-xs mt-0.5 line-clamp-2 leading-relaxed">
                      {p.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
