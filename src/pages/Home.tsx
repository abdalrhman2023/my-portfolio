import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import SkillsSection from '../components/SkillsSection';
import TimelineSection from '../components/TimelineSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <SkillsSection />
      <TimelineSection />
      <ProjectsSection />
      <ContactSection />
    </motion.div>
  );
}
