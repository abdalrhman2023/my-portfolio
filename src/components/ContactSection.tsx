import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare, Linkedin, Github, ExternalLink, MapPin, Phone } from 'lucide-react';

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((res) => setTimeout(res, 1200));
    setIsSubmitting(false);
    setFormState({ name: '', email: '', message: '' });
    alert('Thank you for your message! I will get back to you soon.');
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/abdalrhman2023', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/abdalrhman-badawi/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:abdalrhman.mahmoud2030@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-cyan-400/60 uppercase">Get in Touch</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            Have a project in mind or just want to chat about AI, computer vision, or machine learning?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div className="relative">
                <div className="absolute top-9 left-4 text-gray-600 pointer-events-none">
                  <User size={16} />
                </div>
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 ml-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-900/60 border border-white/[0.08] rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/15 transition-all duration-200 text-sm"
                    placeholder="Your Name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <div className="absolute top-9 left-4 text-gray-600 pointer-events-none">
                  <Mail size={16} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 ml-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-900/60 border border-white/[0.08] rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/15 transition-all duration-200 text-sm"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <div className="absolute top-9 left-4 text-gray-600 pointer-events-none">
                  <MessageSquare size={16} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 ml-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-900/60 border border-white/[0.08] rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/15 transition-all duration-200 resize-none text-sm"
                    placeholder="Hi, I'd like to discuss a project..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.99 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-sm hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white/25 border-t-white rounded-full"
                  />
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              <div className="bg-gray-900/50 border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-colors">
                <h3 className="text-white font-semibold text-base mb-4">Location</h3>
                <div className="flex items-start gap-3 text-gray-500 text-sm">
                  <MapPin size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>Cairo, Egypt</p>
                    <p className="text-xs text-gray-600 mt-1">Available for remote opportunities and collaborations worldwide</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-colors">
                <h3 className="text-white font-semibold text-base mb-4">Contact Info</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-gray-500 text-sm">
                    <Phone size={15} className="text-emerald-400" />
                    <span>+20 1095508432</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500 text-sm">
                    <Mail size={15} className="text-sky-400" />
                    <a href="mailto:abdalrhman.mahmoud2030@gmail.com" className="hover:text-white transition-colors">
                      abdalrhman.mahmoud2030@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-colors">
                <h3 className="text-white font-semibold text-base mb-4">Connect With Me</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.06] hover:border-cyan-400/25 transition-all duration-200 text-sm"
                    >
                      <link.icon size={15} />
                      <span>{link.label}</span>
                      <ExternalLink size={11} className="text-gray-600 ml-0.5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-400/10 via-sky-400/5 to-blue-400/10 border border-cyan-400/20 rounded-2xl p-6">
                <p className="text-gray-400 text-sm leading-relaxed">
                  I'm currently looking for internship opportunities in AI/ML engineering, computer vision, and data science. Let's connect and discuss how I can contribute to your team!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
