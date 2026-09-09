# Johanna Marie Lasala — Portfolio

This is my personal portfolio website, created to showcase who I am, what I can do, and the projects and experiences I've worked on as a front-end web developer and designer.

I wanted the portfolio to feel more than just a collection of information. I designed it with a cinematic, modern, and slightly editorial style while keeping it clean, interactive, and easy to explore.

The website is built with React, Vite, Tailwind CSS, Framer Motion, and Lucide icons. Most of my portfolio content is organized in one editable file: `src/content.js`, making it easier for me to update my information without editing multiple components.

## Portfolio Sections

- **Hero** — My name, role, portrait, location, availability status, and calls to action, with interactive pointer and touch effects.
- **About** — A short introduction about me, along with my location, current focus, education, and tools I use.
- **Experience** — My front-end experience, school projects, Visual Basic experience, and education background.
- **Skills** — My skills grouped into languages and markup, design, and development tools.
- **Projects** — Projects I've worked on, including my contributions and the technologies I used.
- **Resume** — A preview of my resume with options to view and download it.
- **Contact** — My contact information and a direct way to reach me through email.
- **Navigation & Footer** — Responsive navigation, active-section tracking, mobile menu, theme toggle, scroll progress, and footer details.

## Tech Stack

I built this portfolio using:

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide Icons
- JavaScript / JSX
- Google Fonts

## Running My Portfolio Locally

To run the project locally, you'll need [Node.js](https://nodejs.org) 18 or later installed.

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
````

After running the command, Vite will provide a local URL, usually:

`http://localhost:5173`

Open the URL in your browser to view my portfolio.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Build the production site
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint for JavaScript and JSX files
```

## Building for Production

To create the production version of my portfolio, run:

```bash
npm run build
```

This generates the `dist/` folder containing the production-ready version of the website.

The site can be deployed to platforms such as Vercel, Netlify, GitHub Pages, or Cloudflare Pages.

To preview the production build locally:

```bash
npm run preview
```

## Editing My Portfolio Content

I keep most of my personal information inside:

`src/content.js`

This file contains:

* My name and role
* About section
* Experience
* Education
* Skills
* Projects
* Contact information

Keeping the content in one file makes it easier for me to update my portfolio without editing multiple component files.

### Photo

My portrait is located at:

`src/assets/johanna-portrait.jpg`

To replace my photo, I can use another image with the same filename. If I rename the file, I need to update its import inside `src/components/Hero.jsx`.

### Resume

My resume is located at:

`src/assets/johanna-resume.jpg`

The Resume section, the "View Resume" button, and the download option all use this file.

### Colors

I customized the color palette inside `tailwind.config.js`.

The main colors are:

* `ink` — navy and graphite surfaces
* `gold` — primary accent
* `signal` — supporting teal
* `ember` — secondary warm accent

Additional light-mode colors and global effects are handled inside `src/index.css`.

### Fonts

I used different fonts for different parts of the design:

* **Bebas Neue** — large poster-style headlines
* **Fraunces** — editorial display text
* **DM Sans** — body text
* **JetBrains Mono** — technical labels

The fonts are loaded from Google Fonts and mapped in `tailwind.config.js`.

### Theme

Dark mode is the default theme.

The navigation bar includes a theme toggle that switches between dark mode and a warm cream light mode.

My selected theme is saved in `localStorage` using `jml-theme-v2`, allowing the website to remember my theme preference when I return.

## Project Structure

```text
src/
  assets/          → My portrait and resume images
  components/      → Navigation, hero, portfolio sections, controls, and footer
  context/         → ThemeContext for dark/light mode
  lib/             → Shared Framer Motion animation variants
  content.js       → All portfolio content
  App.jsx          → Main page composition
  main.jsx         → React entry point
  index.css        → Tailwind layers, fonts, theme overrides, and animations

.vscode/
  settings.json    → Tailwind CSS editor settings
```

## Interactive Features

I added several interactions to make the portfolio feel more alive instead of being just a static website.

* My hero portrait reacts to mouse and touch movement and smoothly returns to its original position.
* The hero headline uses a gold gradient.
* The word currently under the pointer or touch interaction gets a subtle glow effect.
* Page elements use Framer Motion for smooth entrance and hover animations.
* The navigation keeps track of the section I'm currently viewing.
* The website includes a responsive mobile navigation.
* The theme can be switched between dark and light mode.
* Scroll progress is shown while navigating through the page.
* Motion is reduced automatically when `prefers-reduced-motion` is enabled.

## Content & Authenticity

I wanted this portfolio to represent my actual background instead of filling it with made-up information.

The experience, education, skills, and projects included on the website are based on my actual resume and work.

## About This Project

This portfolio is also a reflection of my growth as I continue learning web development and design. I built it to experiment with modern web technologies, animations, responsive layouts, and interactive experiences while creating something that represents me.

**Built with curiosity, creativity, and continuous learning.**

**Johanna Marie Lasala**


