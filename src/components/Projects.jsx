import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '../content.js';
import { fadeUp, revealViewport } from '../lib/animations.js';
import SectionHeading from './SectionHeading.jsx';

export default function Projects() {
  return (
    <section id="projects" className="section-wash bg-ink-100/50 py-24 dark:bg-ink-900/40 sm:py-32">
      <div className="container-editorial">
        <SectionHeading
          index="04"
          title="Projects"
          description="Independent and school work — the projects behind the experience above."
        />

        <div className="divide-y divide-ink-200 border-t border-ink-200 dark:divide-ink-700 dark:border-ink-700">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              custom={i * 0.05}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="group grid grid-cols-1 gap-4 py-9 transition-[padding] duration-300 ease-editorial sm:grid-cols-12 sm:gap-8 sm:hover:pl-3"
            >
              <div className="sm:col-span-3">
                <span className="label-mono text-ink-400">0{i + 1} · {project.type}</span>
              </div>

              <div className="sm:col-span-9">
                <h3 className="flex items-center gap-2 font-display text-2xl font-medium text-ink-900 dark:text-ink-50">
                  {project.title}
                  <ArrowRight
                    size={18}
                    className="translate-x-0 text-gold-400 opacity-0 transition-all duration-300 ease-editorial group-hover:translate-x-1 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </h3>
                <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {project.description}
                </p>
                <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                  <span className="font-medium text-ink-700 dark:text-ink-200">My part: </span>
                  {project.contribution}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="label-mono rounded-full border border-ink-200 px-2.5 py-1 text-ink-500 dark:border-ink-700 dark:text-ink-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
