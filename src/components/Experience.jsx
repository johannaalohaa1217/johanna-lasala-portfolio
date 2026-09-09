import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education, experience } from '../content.js';
import { fadeUp, revealViewport } from '../lib/animations.js';
import SectionHeading from './SectionHeading.jsx';

export default function Experience() {
  return (
    <section id="experience" className="section-wash bg-ink-100/50 py-24 dark:bg-ink-900/40 sm:py-32">
      <div className="container-editorial">
        <SectionHeading
          index="02"
          title="Experience"
          description="Hands-on work building and shipping front-end projects."
        />

        <ol className="relative">
          <div
            aria-hidden="true"
            className="absolute left-[7px] top-2 bottom-2 w-px bg-ink-200 dark:bg-ink-700"
          />

          {experience.map((role, i) => (
            <motion.li
              key={role.role}
              variants={fadeUp}
              custom={i * 0.06}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              whileHover={{ x: 8 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="group relative pb-14 pl-10 last:pb-0"
            >
              <span className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-gold-500 bg-ink-50 dark:bg-ink-950">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              </span>

              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-display text-xl font-medium text-ink-900 transition-colors duration-300 group-hover:text-gold-600 dark:text-ink-50 dark:group-hover:text-gold-300">
                  {role.role}
                </h3>
                <span className="label-mono text-ink-400">EXP.0{i + 1}</span>
              </div>
              <p className="mt-1 text-sm italic text-ink-500 dark:text-ink-400">{role.context}</p>

              <ul className="mt-4 space-y-2">
                {role.points.map((point) => (
                  <li
                    key={point}
                    className="relative pl-4 text-sm leading-relaxed text-ink-600 dark:text-ink-300"
                  >
                    <span className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full bg-ink-400 dark:bg-ink-500" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {role.stack.map((tech) => (
                  <span
                    key={tech}
                    className="label-mono rounded-full border border-ink-200 px-2.5 py-1 text-ink-500 dark:border-ink-700 dark:text-ink-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.li>
          ))}
        </ol>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          id="education"
          whileHover={{ y: -5, borderColor: '#DFAE3D' }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="group mt-4 flex flex-col gap-4 rounded-2xl border border-ink-200 p-6 dark:border-ink-700 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-start gap-4">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink-200 text-ink-500 dark:border-ink-700 dark:text-ink-400">
              <GraduationCap size={16} strokeWidth={1.75} />
            </span>
            <div>
              <p className="label-mono mb-1 text-ink-400">Education</p>
              <h3 className="font-display text-lg font-medium text-ink-900 transition-colors duration-300 group-hover:text-gold-600 dark:text-ink-50 dark:group-hover:text-gold-300">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
                {education.school} · {education.location}
              </p>
            </div>
          </div>
          <span className="label-mono self-start rounded-full border border-ink-200 px-3 py-1.5 text-ink-500 dark:border-ink-700 dark:text-ink-400 sm:self-center">
            {education.years}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
