import { motion } from 'framer-motion';
import { Code, Brain, Layers, Wrench, Database, Zap } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    color: 'from-cyan-400 to-blue-500',
    skills: ['Python', 'SQL', 'C'],
  },
  {
    title: 'AI / ML',
    icon: Brain,
    color: 'from-emerald-400 to-teal-500',
    skills: [
      'Supervised Learning',
      'Unsupervised Learning',
      'Deep Learning',
      'Computer Vision',
      'Feature Engineering',
      'EDA',
      'Statistical Modeling',
    ],
  },
  {
    title: 'ML / DL Frameworks',
    icon: Layers,
    color: 'from-sky-400 to-cyan-500',
    skills: ['Scikit-learn', 'PyTorch', 'Keras', 'OpenCV', 'TensorFlow', 'YOLO', 'Hugging Face'],
  },
  {
    title: 'Data & Visualization',
    icon: Database,
    color: 'from-purple-400 to-pink-500',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    color: 'from-blue-400 to-indigo-500',
    skills: ['Jupyter Notebook', 'VS Code', 'Git / GitHub', 'Streamlit'],
  },
  {
    title: 'Soft Skills',
    icon: Zap,
    color: 'from-orange-400 to-red-500',
    skills: ['Teamwork', 'Problem-Solving', 'Analytical Thinking', 'Communication'],
  },
];

function SkillBadge({ skill, index }: { skill: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="px-3.5 py-2.5 rounded-lg bg-gray-900/80 border border-white/[0.08] text-[13px] text-gray-300 font-medium backdrop-blur-sm hover:border-cyan-400/30 hover:text-white transition-all duration-200 cursor-default whitespace-nowrap"
    >
      {skill}
    </motion.div>
  );
}

function SkillCategory({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const Icon = category.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className="group relative h-full"
    >
      <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20" />
      <div className="relative h-full bg-gray-900/70 border border-white/[0.08] rounded-2xl p-6 hover:border-white/15 hover:bg-gray-900/90 transition-all duration-300 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
            <Icon size={19} className="text-white" />
          </div>
          <h3 className="text-white font-semibold text-[15px]">{category.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, i) => (
            <SkillBadge key={skill} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-cyan-400/60 uppercase">Technical Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Skills & Technologies</h2>
          <p className="text-gray-500 mt-3 text-sm max-w-xl">
            Tools and frameworks I use to build intelligent systems, from data pipelines to deployed models.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {skillCategories.map((cat, i) => (
            <SkillCategory key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
