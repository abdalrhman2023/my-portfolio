import { motion } from 'framer-motion';
import { GraduationCap, Award, Layers } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'AI Engineering Student',
    description: 'Studying AI engineering with a focus on machine learning systems, deep neural networks, and computer vision pipelines.',
  },
  {
    icon: Briefcase,
    title: 'DEPI Trainee',
    description: 'AI & ML Trainee at Digital Egypt Pioneers Initiative — building production-grade CV models and deploying ML systems.',
  },
  {
    icon: Award,
    title: 'Hackathon Winner',
    description: 'Awarded Best AI Project at GDG Delta Egypt Hackathon for a real-time PPE detection system.',
  },
  {
    icon: Layers,
    title: 'Full-Stack AI',
    description: 'From data collection and labeling to model training, evaluation, and deploying interactive demos via Streamlit.',
  },
];

import { Briefcase } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-semibold tracking-widest text-cyan-400/60 uppercase">Background</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gray-400 text-base leading-[1.8] mb-6">
              I'm Abdelrahman Badawi, an AI Engineering student passionate about building intelligent systems that solve real-world problems. My work sits at the intersection of computer vision, deep learning, and software engineering.
            </p>
            <p className="text-gray-500 text-sm leading-[1.8] mb-8">
              Currently training at the Digital Egypt Pioneers Initiative (DEPI), I develop and deploy machine learning models ranging from object detection pipelines to emotion recognition systems. I thrive in fast-paced environments like hackathons, where I can push ideas from concept to working prototype.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Python', 'PyTorch', 'YOLOv8', 'OpenCV', 'Streamlit', 'Scikit-learn', 'EasyOCR', 'Git'].map((tech) => (
                <span key={tech} className="text-xs px-3 py-1.5 rounded-lg bg-gray-900 border border-white/[0.06] text-gray-400 font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-900/50 border border-white/[0.06] rounded-xl p-5 hover:border-cyan-400/20 hover:bg-gray-900/70 transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-400/10 flex items-center justify-center mb-3 group-hover:bg-cyan-400/15 transition-colors">
                  <item.icon size={16} className="text-cyan-400" />
                </div>
                <h3 className="text-white font-medium text-sm mb-1.5">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
