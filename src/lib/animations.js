// Shared animation variants — kept small and reused across sections so motion
// feels consistent rather than bespoke-per-component.

export const easeEditorial = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: easeEditorial },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay, ease: easeEditorial },
  }),
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay, ease: easeEditorial },
  }),
};

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

// Viewport settings used with whileInView across sections so each section's
// content reveals once, the first time it scrolls into frame.
export const revealViewport = { once: true, margin: '-80px 0px -80px 0px' };
