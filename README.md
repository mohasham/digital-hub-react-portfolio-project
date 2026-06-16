# Mohammad Shamma | Full Stack Web Developer Portfolio

A professional personal portfolio website built with React, showcasing my background, skills, projects, and professional value as a Full Stack Web Developer.

---

## 🚀 Live Demo

> Coming soon

---

## 📸 Screenshot

<!--
<p align="center">
  <img src="./screenshots/portfolio.png" alt="Portfolio Preview" width="800"/>
</p>
-->

---

## 📋 Project Overview

This portfolio is a single-page application (SPA) built with React and styled using SCSS with BEM methodology. It presents my technical expertise, featured projects, and contact information in a clean, modern, and fully responsive design.

---

## 🗂 Project Structure

```
src/
├── assets/                  # Images and static files
├── components/
│   ├── header/              # Fixed navigation bar
│   ├── footer/              # Site footer
│   └── project-card/        # Reusable project card component
├── sections/
│   ├── hero/                # Hero / intro section
│   ├── technologies/        # Technical ecosystem (Frontend, Backend, Tools)
│   ├── about/               # Core expertise bento cards
│   ├── projects/            # Featured works
│   ├── hire-me/             # Why collaborate + quote card
│   └── contact/             # Contact form
├── pages/
│   └── home/                # Home page — assembles all sections
├── styles/
│   └── config.scss          # Global SCSS variables, breakpoints, and mixins
├── App.jsx                  # Root component
├── main.jsx                 # Entry point
└── index.css                # Base reset styles
```

---

## 🛠 Technologies Used

| Category | Technology |
|----------|-----------|
| Framework | React 18 |
| Language | JavaScript (JSX) |
| Styling | SCSS with BEM methodology |
| Fonts | Inter, JetBrains Mono (Google Fonts) |
| Icons | Material Symbols Outlined (Google) |
| Build Tool | Vite |
| State Management | React Hooks (useState, useEffect) |
| Routing | None — single page with smooth scroll |

---

## 📦 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

---

## ⚙️ How to Run Locally

**1. Clone the repository**

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm run dev
```

**4. Open in browser**

```
http://localhost:5173
```

---

## 🏗 How to Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder, ready to deploy to any static hosting service.

---

## 🌍 Deployment

This project can be deployed to:

- [Vercel](https://vercel.com/) — recommended, connect your GitHub repo and deploy in one click
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)

---

## 📱 Responsive Design

The portfolio is fully responsive across all screen sizes:

| Breakpoint | Variable | Target |
|------------|----------|--------|
| 20em (320px) | `$bp-xs` | Very small / old phones |
| 30em (480px) | `$bp-sm` | Small phones |
| 48em (768px) | `$bp-md` | Tablets and up |
| 64em (1024px) | `$bp-lg` | Small desktops |
| 75em (1200px) | `$bp-xl` | Large desktops |

---

## ✨ Features

- Fixed glassmorphism navigation bar with scroll effect
- Animated hero section with floating image
- Technical ecosystem cards (Frontend, Backend, Tools)
- Core expertise bento grid
- Featured projects with hover overlay
- Why collaborate section with quote card
- Contact form with controlled React state
- Fully responsive down to 320px
- SCSS BEM methodology throughout
- CSS custom properties for theming

---

## 👤 Author

**Mohammad Shamma**
- Email: mohammadshamma298@gmail.com
- GitHub: [github.com/your-username](https://github.com/mohasham)
- LinkedIn: [linkedin.com/in/your-profile](https://www.linkedin.com/in/mohammad-shamma/)

---

© 2026 Mohammad Shamma. Built with precision and vision.
