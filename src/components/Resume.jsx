import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import resumeImg from '../assets/johanna-resume.jpg';
import { fadeUp, revealViewport } from '../lib/animations.js';
import SectionHeading from './SectionHeading.jsx';

export default function Resume() {
  return (
    <section id="resume" className="py-24 sm:py-32">
      <div className="container-editorial">
        <SectionHeading
          index="05"
          title="Resume"
          description="The full document — open it in a new tab or download a copy."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          whileHover={{ y: -6, rotateX: 1.5 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-ink-200 shadow-[0_18px_50px_-30px_rgba(246,200,95,0.8)] transition-colors duration-300 hover:border-gold-400 dark:border-ink-700"
        >
          <div className="flex items-center justify-between border-b border-ink-200 bg-ink-100 px-4 py-3 dark:border-ink-700 dark:bg-ink-800/60">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-ink-300 dark:bg-ink-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-300 dark:bg-ink-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-300 dark:bg-ink-600" />
            </div>
            <span className="label-mono text-ink-400">Johanna_Marie_Lasala_Resume.jpg</span>
          </div>

          <div className="flex justify-center bg-ink-200/60 p-4 dark:bg-ink-900/60 sm:p-8">
            <img
              src={resumeImg}
              alt="Full resume of Johanna Marie Lasala, including education, experience, and skills"
              loading="lazy"
              className="max-h-[780px] w-auto rounded-md object-contain shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)]"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center gap-3"
        >
          <a
            href={resumeImg}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-400 px-5 py-3 text-sm font-medium text-ink-950 transition-transform duration-300 ease-editorial hover:-translate-y-0.5 hover:bg-gold-300 dark:bg-gold-400 dark:text-ink-950 dark:hover:bg-gold-300"
          >
            Open full resume
            <ExternalLink size={15} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={resumeImg}
            download="Johanna_Marie_Lasala_Resume.jpg"
            className="inline-flex items-center gap-2 rounded-full border border-ink-300 px-5 py-3 text-sm font-medium text-ink-800 transition-colors duration-300 hover:border-gold-500 hover:text-gold-600 dark:border-ink-600 dark:text-ink-100 dark:hover:border-gold-400 dark:hover:text-gold-300"
          >
            Download resume
            <Download size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
