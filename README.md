# Johanna Marie Lasala — Portfolio

This is my personal portfolio website, created to showcase who I am, what I can do, and the projects and experiences I've worked on as a front-end web developer and designer.

I wanted the portfolio to feel more than just a collection of information. I designed it with a cinematic, modern, and slightly editorial style while keeping it clean, interactive, and easy to explore.

The portfolio is a standalone `index.html` file with its own responsive CSS and JavaScript interactions.

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

- HTML
- CSS
- JavaScript
- Google Fonts

## Running My Portfolio Locally

The simplest option is to double-click `index.html` and open it in a browser. Keep the `assets` folder beside it so the portrait and resume images can load.

The site can be deployed as-is to GitHub Pages, Netlify, Vercel, or Cloudflare Pages.

## Editing My Portfolio Content

I keep most of my personal information inside:

`index.html`

This file contains:

* My name and role
* About section
* Experience
* Education
* Skills
* Projects
* Contact information

Keeping the content in one file makes it easier to update the portfolio without editing multiple component files.

### Photo

My portrait is located at:

`assets/johanna-portrait.jpg`

To replace my photo, use another image with the same filename.

### Resume

My resume is located at:

`assets/Johanna_Marie_Lasala_Vibe_Coder_Resume.pdf`

The Resume section, the "View Resume" button, and the download option all use this file.

### Colors

The color palette is defined in the `<style>` section inside `index.html`.

The main colors are:

* `ink` — navy and graphite surfaces
* `gold` — primary accent
* `signal` — supporting teal
* `ember` — secondary warm accent

### Fonts

I used different fonts for different parts of the design:

* **Bebas Neue** — large poster-style headlines
* **Fraunces** — editorial display text
* **DM Sans** — body text
* **JetBrains Mono** — technical labels

The fonts are loaded from Google Fonts in `index.html`.

### Theme

Dark mode is the default theme.

The navigation bar includes a theme toggle that switches between dark mode and a warm cream light mode.

My selected theme is saved in `localStorage` using `jml-theme-v2`, allowing the website to remember my theme preference when I return.

Claude AI is highlighted in the About, Experience, Skills, and Projects sections as the AI development tool used while making and refining projects.

## Project Structure

```text
assets/
  johanna-portrait.jpg                 → Portrait image
  Johanna_Marie_Lasala_Vibe_Coder_Resume.pdf → Resume PDF

.github/workflows/
  deploy.yml       → Static GitHub Pages deployment

index.html         → Portfolio markup, styles, and interactions
```

## Interactive Features

I added several interactions to make the portfolio feel more alive instead of being just a static website.

* My hero portrait reacts to mouse and touch movement and smoothly returns to its original position.
* The hero headline uses a gold gradient.
* The word currently under the pointer or touch interaction gets a subtle glow effect.
* Page elements use CSS animations for smooth entrance and hover animations.
* The navigation keeps track of the section I'm currently viewing.
* The website includes a responsive mobile navigation.
* The theme can be switched between dark and light mode.
* Scroll progress is shown while navigating through the page.
* Motion is reduced automatically when `prefers-reduced-motion` is enabled.

## Content & Authenticity

I wanted this portfolio to represent my actual background instead of filling it with made-up information.

The experience, education, skills, and projects included on the website are based on my actual resume and work.

## About This Project

This portfolio is also a reflection of my growth as I continue learning web development and design. I built it to experiment with animations, responsive layouts, and interactive experiences while creating something that represents me.

**Built with curiosity, creativity, and continuous learning.**

**Johanna Marie Lasala**


