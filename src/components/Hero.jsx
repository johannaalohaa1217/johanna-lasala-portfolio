import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import portrait from '../assets/johanna-portrait.jpg';
import { profile } from '../content.js';
import { easeEditorial, staggerContainer } from '../lib/animations.js';

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeEditorial } },
};

const headlineWords = ['BUILDING',  'DIGITAL', 'EXPERIENCES'];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Hero() {
  const [portraitMotion, setPortraitMotion] = useState({ rotateX: 0, rotateY: 0 });
  const [activeHeadlineWord, setActiveHeadlineWord] = useState(null);

  const handlePortraitMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    setPortraitMotion({
      rotateX: Number((y * -7).toFixed(2)),
      rotateY: Number((x * 7).toFixed(2)),
    });
  };

  const resetPortraitMotion = () => setPortraitMotion({ rotateX: 0, rotateY: 0 });

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-24 lg:pt-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-20 h-[34rem] w-[34rem] rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-px w-1/2 bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
        <span className="absolute left-6 top-32 font-mono text-[0.6rem] tracking-[0.3em] text-ink-600 [writing-mode:vertical-rl]">
          DIGITAL / 2026
        </span>
      </div>

      <motion.div
        variants={staggerContainer(0.12, 0.2)}
        initial="hidden"
        animate="visible"
        className="container-editorial relative grid min-h-[calc(100vh-4rem)] grid-cols-1 items-center gap-8 pb-14 lg:grid-cols-12 lg:gap-0"
      >
        <div className="relative z-20 order-2 lg:order-1 lg:col-span-7">
          <motion.p variants={item} className="mb-4 flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-gold-600 dark:text-gold-400">
            <span className="signal-pulse h-2 w-2 rounded-full bg-gold-500 dark:bg-gold-400" />
            {profile.role}
          </motion.p>

          <motion.h1
            variants={item}
            onPointerLeave={() => setActiveHeadlineWord(null)}
            className="hero-title max-w-4xl font-poster text-[clamp(4.8rem,13vw,11rem)] leading-[0.78] tracking-[0.015em] text-gold-300"
          >
            {headlineWords.map((word) => (
              <motion.span
                key={word}
                animate={
                  activeHeadlineWord === word
                    ? {
                        scale: 1.012,
                        textShadow: '0 0 18px rgba(246, 200, 95, 0.7), 0 0 44px rgba(246, 200, 95, 0.3)',
                      }
                    : {
                        scale: 1,
                        textShadow: '0 0 28px rgba(246, 200, 95, 0.12)',
                      }
                }
                transition={{ duration: 0.75, ease: easeEditorial }}
                onPointerEnter={() => setActiveHeadlineWord(word)}
                onPointerLeave={() => setActiveHeadlineWord(null)}
                className="inline-block cursor-default bg-gradient-to-b from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent"
              >
                {word}
                {word === 'BUILDING' && (
                  <span aria-hidden="true" className="headline-cursor ml-2 inline-block h-[0.72em] w-[0.08em] translate-y-[0.05em] bg-gold-400 align-baseline" />
                )}
                <br />
              </motion.span>
            ))}
          </motion.h1>

          <motion.div variants={item} className="mt-7 max-w-xl border-l-2 border-gold-400/70 pl-4 sm:pl-6">
            <p className="text-base leading-relaxed text-ink-600 dark:text-ink-200 sm:text-lg">{profile.intro}</p>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="group inline-flex items-center gap-2 border border-gold-400 bg-gold-400 px-5 py-3 text-sm font-semibold text-ink-950 transition-transform duration-300 ease-editorial hover:-translate-y-1 hover:bg-gold-300"
            >
              Explore my work
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo('resume')}
              className="inline-flex items-center gap-2 border border-ink-400 px-5 py-3 text-sm font-medium text-ink-800 transition-colors duration-300 hover:border-gold-600 hover:text-gold-600 dark:border-ink-500 dark:text-ink-100 dark:hover:border-gold-400 dark:hover:text-gold-300"
            >
              View resume
            </button>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="relative z-10 order-1 mx-auto w-full max-w-[22rem] touch-pan-y lg:order-2 lg:col-span-5 lg:mx-0 lg:max-w-none"
          onPointerMove={handlePortraitMove}
          onPointerLeave={resetPortraitMotion}
          onPointerUp={resetPortraitMotion}
          onPointerCancel={resetPortraitMotion}
        >
          <div className="absolute -inset-5 border border-gold-400/30 [clip-path:polygon(0_0,22%_0,22%_1px,0_1px,0_22%,1px_22%,1px_0,100%_0,100%_78%,calc(100% - 1px)_78%,calc(100% - 1px)_100%,78%_100%,78%_calc(100% - 1px),100%_calc(100% - 1px),100%_0)]" />
          <motion.div
            animate={portraitMotion}
            transition={{ type: 'spring', stiffness: 260, damping: 22, mass: 0.45 }}
            style={{ transformPerspective: 900 }}
            className="relative aspect-[4/5] overflow-hidden border border-gold-400/60 bg-ink-900 shadow-[0_28px_80px_-28px_rgba(246,200,95,0.45)]"
          >
            <img
              src={portrait}
              alt="Portrait of Johanna Marie Lasala, front-end web developer and designer"
              className="h-full w-full object-cover object-top grayscale-[12%] contrast-110 transition-transform duration-1000 ease-editorial hover:scale-105"
              width="760"
              height="950"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-ink-950/10" />
            <div className="scanline absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-transparent via-gold-300/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between border-t border-gold-300/40 pt-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-gold-300">
              <span>JM / 001</span>
              <span className="flex items-center gap-2"><MapPin size={11} /> PH</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.button
          variants={item}
          type="button"
          onClick={() => scrollTo('about')}
          aria-label="Scroll to about section"
          className="absolute bottom-8 left-0 hidden items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-ink-500 transition-colors hover:text-gold-300 lg:inline-flex"
        >
          <ArrowDown size={14} className="animate-bounce [animation-duration:2s]" />
          Scroll to explore
        </motion.button>
      </motion.div>
    </section>
  );
}
