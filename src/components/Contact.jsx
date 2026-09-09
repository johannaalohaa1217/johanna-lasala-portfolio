import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../content.js';
import { fadeUp, revealViewport, staggerContainer } from '../lib/animations.js';
import SectionHeading from './SectionHeading.jsx';

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container-editorial">
        <SectionHeading index="06" title="Contact" />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end"
        >
          <motion.div variants={fadeUp} className="lg:col-span-8">
            <p className="text-balance font-display text-3xl font-medium leading-tight text-ink-900 dark:text-ink-50 sm:text-4xl">
              Looking for a front-end developer who cares about the small details?
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="group mt-6 inline-flex items-center gap-2 text-lg font-medium text-gold-600 dark:text-gold-400"
            >
              {profile.email}
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-3 border-t border-ink-200 pt-6 dark:border-ink-700 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"
          >
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-3 text-sm text-ink-600 transition-all duration-300 hover:translate-x-2 hover:text-gold-600 dark:text-ink-300 dark:hover:text-gold-400"
            >
              <Mail size={15} className="shrink-0 text-ink-400" />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="group flex items-center gap-3 text-sm text-ink-600 transition-all duration-300 hover:translate-x-2 hover:text-gold-600 dark:text-ink-300 dark:hover:text-gold-400"
            >
              <Phone size={15} className="shrink-0 text-ink-400" />
              {profile.phone}
            </a>
            <p className="flex items-center gap-3 text-sm text-ink-600 dark:text-ink-300">
              <MapPin size={15} className="shrink-0 text-ink-400" />
              {profile.location}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
