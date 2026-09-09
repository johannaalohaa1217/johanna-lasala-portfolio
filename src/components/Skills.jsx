import { motion } from 'framer-motion';
import { skillGroups } from '../content.js';
import { fadeUp, revealViewport, staggerContainer } from '../lib/animations.js';
import SectionHeading from './SectionHeading.jsx';

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container-editorial">
        <SectionHeading
          index="03"
          title="Skills"
          description="Grouped by where each tool shows up in my process."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              variants={fadeUp}
              whileHover={{ y: -6, rotate: i % 2 === 0 ? -0.5 : 0.5 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="group rounded-2xl border border-ink-200 p-6 transition-colors duration-300 hover:border-gold-400/70 dark:border-ink-700 dark:hover:border-gold-400/60"
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-sm font-medium text-ink-800 dark:text-ink-100">
                  {group.label}
                </h3>
                <span className="label-mono text-ink-300 dark:text-ink-600">0{i + 1}</span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <span className="inline-block rounded-full border border-ink-200 px-3 py-1.5 text-sm text-ink-600 transition-all duration-200 ease-editorial group-hover:border-ink-300 hover:!border-gold-500 hover:!bg-gold-50 hover:!text-gold-700 dark:border-ink-700 dark:text-ink-300 dark:hover:!bg-gold-500/10 dark:hover:!text-gold-300">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
