import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import SectionDivider from '../components/SectionDivider';
import TechMarquee from '../components/TechMarquee';
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
      <SectionDivider variant="glow" />
      <AboutSection />
      <StatsSection />
      <TechMarquee />
      <SectionDivider variant="wave" />
      <SkillsSection />
      <SectionDivider variant="gradient" />
      <TimelineSection />
      <SectionDivider variant="wave" flip />
      <ProjectsSection />
      <SectionDivider variant="glow" />
      <ContactSection />
    </motion.div>
  );
}
