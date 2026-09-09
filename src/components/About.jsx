import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { about, profile } from '../content.js';
import { fadeUp, revealViewport, staggerContainer } from '../lib/animations.js';
import SectionHeading from './SectionHeading.jsx';

export default function About() {
  const paragraphRef = useRef(null);
  const paragraphInView = useInView(paragraphRef, { once: true, margin: '-100px 0px' });
  const [typedParagraph, setTypedParagraph] = useState('');

  useEffect(() => {
    if (!paragraphInView) return undefined;

    let characterIndex = 0;
    const timer = window.setInterval(() => {
      characterIndex += 1;
      setTypedParagraph(about.paragraph.slice(0, characterIndex));

      if (characterIndex >= about.paragraph.length) {
        window.clearInterval(timer);
      }
    }, 18);

    return () => window.clearInterval(timer);
  }, [paragraphInView]);

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-editorial">
        <SectionHeading index="01" title="About" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <motion.div
            ref={paragraphRef}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="lg:col-span-7"
          >
            <p className="text-balance font-display text-2xl font-normal leading-snug text-ink-800 dark:text-ink-100 sm:text-[1.75rem]" aria-label={about.paragraph}>
              {Array.from(typedParagraph).map((character, index) => (
                <span key={`${character}-${index}`}>{character}</span>
              ))}
              <span aria-hidden="true" className="typing-cursor ml-1 inline-block h-[1em] w-[0.08em] translate-y-[0.12em] bg-gold-500 align-baseline dark:bg-gold-400" />
            </p>
            <p className="mt-6 max-w-[54ch] text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              {profile.intro}
            </p>
          </motion.div>

          <motion.dl
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="grid grid-cols-1 gap-0 border-t border-ink-200 dark:border-ink-700 lg:col-span-5 lg:border-t-0 lg:border-l lg:pl-10"
          >
            {about.details.map((d) => (
              <motion.div
                key={d.label}
                variants={fadeUp}
                whileHover={{ x: 8, borderColor: '#DFAE3D' }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="group flex items-center justify-between gap-4 border-b border-ink-200 py-4 dark:border-ink-700"
              >
                <dt className="label-mono text-ink-400">{d.label}</dt>
                <dd className="text-right text-sm font-medium text-ink-800 transition-colors duration-300 group-hover:text-gold-600 dark:text-ink-100 dark:group-hover:text-gold-300">
                  {d.value}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
