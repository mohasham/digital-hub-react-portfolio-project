import React from 'react';
import './projects.styles.scss';
import ProjectCard from '../../components/project-card/project-card.component';
import Icon from '../../components/icon/icon.component';

const Projects = () => {
  const customProjectsList = [
    {
      imgUrl: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?auto=format&fit=crop&w=1200&q=80",
      imgAlt: "FitConnect — Personal Trainer Booking Platform",
      dataAlt: "A personal training booking platform interface.",
      tags: ["Next.js", "PostgreSQL", "Supabase", "RLS"],
      title: "FitConnect — Trainer Booking Platform",
      description: "Full-stack booking platform where clients discover trainers, book sessions, and pay end-to-end. Two-layer authorization (route guards + Row Level Security), real-time slot validation, and role-specific client/admin dashboards.",
      repoUrl: "https://github.com/mohasham/Personal-Trainers-Scheduling-System"
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
      imgAlt: "EatWise — AI Meal Planning App",
      dataAlt: "A healthy meal planning application dashboard.",
      tags: ["MERN", "TypeScript", "Groq AI", "MongoDB"],
      title: "EatWise — AI Meal Planning App",
      description: "MERN app that generates AI-personalized daily meal plans from user health profiles using the Groq API (Llama 3.3 70B). BMR-based calorie targeting, JWT role-based access, and an admin analytics dashboard built on MongoDB aggregation pipelines.",
      repoUrl: "https://github.com/mohasham/DH-EatWise"
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      imgAlt: "Rivo — E-Commerce & Inventory Platform",
      dataAlt: "An e-commerce storefront and inventory dashboard.",
      tags: ["React", "Node.js", "Express", "Redux Saga"],
      title: "Rivo — E-Commerce & Inventory Platform",
      description: "Full-stack e-commerce platform with separate customer and admin interfaces: authentication, product management, cart, and order processing. RESTful APIs with JWT auth, RBAC, and inventory management, with a responsive SCSS (BEM) + Redux Toolkit UI.",
      repoUrl: "https://github.com/mohasham/react-project-stock-management"
    }
  ];

  return (
    <section className="portfolio-showcase" id="projects">
      <div className="portfolio-showcase__container">
        <div className="portfolio-showcase__header">
          <div>
            <h2 className="portfolio-showcase__title">Featured Works</h2>
            <p className="portfolio-showcase__subtitle">A selection of full-stack projects I've designed, built, and shipped end-to-end.</p>
          </div>
          <a className="portfolio-showcase__action-link" href="https://github.com/mohasham" target="_blank" rel="noopener noreferrer">
            View All on GitHub <Icon name="arrow_forward" className="material-symbols-outlined" />
          </a>
        </div>
        <div className="portfolio-showcase__grid">
          {customProjectsList.map((project, idx) => (
            <ProjectCard
              key={idx}
              imgUrl={project.imgUrl}
              imgAlt={project.imgAlt}
              dataAlt={project.dataAlt}
              tags={project.tags}
              title={project.title}
              description={project.description}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
