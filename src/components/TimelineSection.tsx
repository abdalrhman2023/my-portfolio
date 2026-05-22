import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Building, CalendarDays, MapPin, ExternalLink } from 'lucide-react';

const timelineEvents = [
  {
    type: 'education',
    title: 'B.Sc. in Engineering — AI Engineering',
    organization: 'Mansoura University',
    location: 'Mansoura, Egypt',
    date: 'Nov 2022 - Expected Jun 2027',
    description: 'GPA: 3.47/4.00 | Coursework: Deep Learning, Computer Vision, Big Data Science, Pattern Recognition, Statistical Modeling, Algorithms & Data Structures.',
    icon: GraduationCap,
    color: 'from-cyan-400 to-blue-500',
    sortDate: new Date('2022-11-01'),
  },
  {
    type: 'certification',
    title: 'Linear Algebra for Machine Learning and Data Science',
    organization: 'Coursera',
    location: 'Online',
    date: 'Nov 2023',
    description: 'Foundational mathematics for machine learning and data science applications.',
    icon: Award,
    color: 'from-blue-400 to-indigo-500',
    sortDate: new Date('2023-11-01'),
    link: 'https://www.coursera.org/account/accomplishments/certificate/TEGGM6WGXLDW',
  },
  {
    type: 'certification',
    title: 'Python for Data Science, AI & Development',
    organization: 'Coursera',
    location: 'Online',
    date: 'Jan 2024',
    description: 'Professional certification covering Python programming, data science workflows, and AI development.',
    icon: Award,
    color: 'from-orange-400 to-pink-500',
    sortDate: new Date('2024-01-01'),
    link: 'https://www.coursera.org/account/accomplishments/certificate/KNZRURZ8ENBT',
  },
  {
    type: 'certification',
    title: 'Foundations: Data, Data, Everywhere',
    organization: 'Coursera',
    location: 'Online',
    date: 'May 2024',
    description: 'Google Career Certificates program covering data analysis fundamentals.',
    icon: Award,
    color: 'from-red-400 to-orange-500',
    sortDate: new Date('2024-05-01'),
    link: 'https://www.coursera.org/account/accomplishments/certificate/KNZRURZ8ENBT',
  },
  {
    type: 'experience',
    title: 'ML & AI Intern',
    organization: 'Digital Egypt Pioneers Initiative (DEPI)',
    location: 'Remote / Hybrid',
    date: 'Mar 2025 - Aug 2025',
    description: 'Built ML pipelines using Python, Pandas, Scikit-learn. Performed EDA, feature engineering, statistical modeling. Delivered end-to-end ML capstone project.',
    icon: Briefcase,
    color: 'from-emerald-400 to-teal-500',
    sortDate: new Date('2025-03-01'),
  },
  {
    type: 'certification',
    title: 'Supervised Machine Learning: Regression and Classification',
    organization: 'Coursera',
    location: 'Online',
    date: 'Apr 2025',
    description: 'Comprehensive certification in machine learning fundamentals and practical implementation.',
    icon: Award,
    color: 'from-sky-400 to-cyan-500',
    sortDate: new Date('2025-04-01'),
    link: 'https://www.coursera.org/account/accomplishments/certificate/X16CIXW5Q9G0',
  },
];

// Sort events by date ascending
const sortedEvents = [...timelineEvents].sort((a, b) => a.sortDate.getTime() - b.sortDate.getTime());

function TimelineEvent({ event, index }: { event: typeof timelineEvents[0]; index: number }) {
  const Icon = event.icon;
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: 0.2 + index * 0.08, duration: 0.5 }}
      className={`flex items-center gap-4 ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-12 last:mb-0`}
    >
      {/* Content Card */}
      <div className={`w-[calc(50%-24px)] ${isLeft ? 'text-right' : 'text-left'}`}>
        <div className="bg-gray-900/70 border border-white/[0.06] rounded-2xl p-5 hover:border-white/15 hover:bg-gray-900/90 transition-all duration-300 group inline-block">
          <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
            <span className="text-xs font-bold text-cyan-400/80 uppercase tracking-wide">
              {event.type.toUpperCase()}
            </span>
          </div>
          <h3 className="text-white font-semibold text-[15px] mb-1">{event.title}</h3>
          <div className={`flex items-center gap-1.5 text-gray-400 text-[12px] mb-1 ${isLeft ? 'justify-end' : 'justify-start'}`}>
            <Building size={11} />
            <span>{event.organization}</span>
          </div>
          <div className={`flex items-center gap-1.5 text-gray-500 text-[12px] mb-1 group-hover:text-gray-400 ${isLeft ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-center ${isLeft ? 'flex-row-reverse' : ''}`}>
              <MapPin size={11} className={isLeft ? 'ml-1' : 'mr-1'} />
              <span>{event.location}</span>
            </div>
          </div>
          <div className={`flex items-center gap-1.5 text-gray-600 text-[12px] mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
            <CalendarDays size={11} />
            <span>{event.date}</span>
          </div>
          <p className="text-gray-500 text-[13px] leading-relaxed">{event.description}</p>
          {event.link && (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 mt-2 ${isLeft ? '' : ''}`}
            >
              View Credential <ExternalLink size={11} />
            </a>
          )}
        </div>
      </div>

      {/* Timeline Dot */}
      <div className="relative z-10 flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08, type: 'spring', stiffness: 300 }}
          className={`w-12 h-12 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center shadow-lg ring-4 ring-gray-950`}
        >
          <Icon size={20} className="text-white" />
        </motion.div>
      </div>

      {/* Empty space for alternating layout */}
      <div className="w-[calc(50%-24px)]" />
    </motion.div>
  );
}

export default function TimelineSection() {
  return (
    <section id="experience" className="py-28 px-6 bg-gray-950/[0.25]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-emerald-400/60 uppercase">Background</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Education & Experience</h2>
          <p className="text-gray-500 mt-3 text-sm max-w-xl">
            My journey through academia, industry training, and professional development in chronological order.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent -translate-x-1/2" />

          {/* Events */}
          {sortedEvents.map((event, i) => (
            <TimelineEvent key={`${event.type}-${event.organization}-${event.date}`} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
