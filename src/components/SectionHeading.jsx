import { motion } from 'framer-motion';
import { fadeUp, revealViewport } from '../lib/animations.js';

export default function SectionHeading({ index, title, description }) {
  const titleMotion = {
    About: { whileHover: { x: 6, color: '#B88520' } },
    Experience: { whileHover: { x: 8, scale: 1.04, color: '#B88520' } },
    Skills: { whileHover: { rotate: -2, color: '#B88520' } },
    Projects: { whileHover: { y: -4, color: '#B88520' } },
    Resume: { whileHover: { scale: 1.04, color: '#B88520' } },
    Contact: { whileHover: { skewX: -5, color: '#B88520' } },
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      className="mb-12 flex flex-col gap-4 border-b border-ink-200 pb-6 dark:border-ink-700 sm:flex-row sm:items-end sm:justify-between"
    >
      <div className="group flex items-baseline gap-3">
        <span className="label-mono !text-gold-400">{index}</span>
        <motion.h2
          {...titleMotion[title]}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-3xl font-medium tracking-tight text-ink-900 dark:text-ink-50 sm:text-4xl"
        >
          {title}
        </motion.h2>
        <span className="ml-1 h-px w-10 origin-left bg-gold-400/70 transition-transform duration-500 ease-editorial group-hover:scale-x-150" />
      </div>
      {description && (
        <p className="max-w-xs text-sm leading-relaxed text-ink-500 dark:text-ink-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}
