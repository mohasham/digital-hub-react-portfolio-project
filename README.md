# Mohammad Shamma — Portfolio

Personal portfolio site. React 19 + Vite + SCSS. No UI or animation
libraries: every transition is CSS, driven by a small IntersectionObserver
hook in `src/hooks/use-reveal.js`.

## Running it

```bash
npm install     # only needed the first time
npm run dev     # http://localhost:5173
npm run build   # production build into dist/
npm run preview # serve the built site locally
```

## Where things live

```
src/
  index.css                  design tokens (colour, type, spacing, motion)
  styles/config.scss         SCSS mixins: shell, panel, eyebrow, breakpoints
  hooks/use-reveal.js        scroll reveal, scrollspy, count-up, pointer tracking
  components/
    header/                  fixed nav, scrollspy, mobile drawer
    footer/
    button/                  magnetic hover
    reveal/                  <Reveal> wrapper for scroll animation
    scroll-progress/         progress bar at the top of the page
    marquee/                 looping stack ticker
    icon/                    inline SVG icon set
    project-card/            card + project-covers.jsx (drawn cover art)
  sections/
    hero/ projects/ about/ experience/ technologies/ hire-me/ contact/
  pages/home/                section order
```

## Editing content

All copy lives in the section components as plain arrays at the top of
each file:

| What | File |
|---|---|
| Projects | `src/sections/projects/projects.component.jsx` → `PROJECTS` |
| Jobs, education, languages | `src/sections/experience/experience.component.jsx` → `TIMELINE` |
| Skills | `src/sections/technologies/technologies.component.jsx` → `GROUPS` |
| How-I-work cards | `src/sections/about/about.component.jsx` → `CARDS` |
| Selling points + quote | `src/sections/hire-me/hire-me.component.jsx` → `REASONS` |
| Email, phone, location | `src/sections/contact/contact.component.jsx` → `EMAIL`, `CHANNELS` |
| Nav items | `src/components/header/header.component.jsx` → `NAV_ITEMS` |
| Hero stats + rotating line | `src/sections/hero/hero.component.jsx` → `FOCUS_LINES`, `STACK_TICKER` |

Colours are CSS custom properties in `src/index.css` under `:root` —
change `--amber` and `--foam` to reshape the whole palette.

Profile photo: `public/images/profile.jpeg`.
CV download: `public/Mohammad_Shamma_CV.pdf`.

## Contact form

The form validates in the browser and then opens the visitor's email
client with the message pre-filled (`mailto:`). There is no backend. To
receive submissions in your inbox instead, point the form at a service
like Formspree and replace the `mailto:` redirect in `handleSubmit`.

## Accessibility

Keyboard focus is visible throughout, the nav drawer traps scroll while
open, and every animation is disabled under `prefers-reduced-motion`.
