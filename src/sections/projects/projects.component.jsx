import React from 'react';
import './projects.styles.scss';
import ProjectCard from '../../components/project-card/project-card.component';

const Projects = () => {
  const customProjectsList = [
    {
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqkM9s6Qnq9tnMW7EkkXgtu0dB8FqFajo9okDpTG75F5RU5mqSqL4_0YMCfh5fHoQBuOGrz4KwzC2yt-AMyRddnYkRZD0k8CV7XxaZffCtuaNYSUS-caPupwbS1Ous3Jt2hWsW42enKOxJnvl-g4-Ksmo5N8HvdljGKNdrcpSyPvQo3LFOCA0j2-our7CNw6bNE30hbX9bbWxeZCvBEI1KL1WJ35PqTP_WcKCojSfissM7Mza8kiuOVbFOag3gEVuwHMvkza646As",
      imgAlt: "FinTech Dashboard",
      dataAlt: "A sophisticated FinTech analytics dashboard displayed on a high-resolution screen.",
      tags: ["Next.js", "GraphQL", "D3.js"],
      title: "OmniChannel Analytics Hub",
      description: "Real-time data synchronization engine processing over 100k events per minute with custom visualization modules."
    },
    {
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnrhLiR52InQFs14mu2YN02ODIXp_dmTuUjWPH81J-Prvsh4sN8PsD1-dCU9dcOCBHYTyG6LwlYFuAjrXvPpFGa4PvvXl_nMGN7Cpaw_mPh_S6WoRgE0YEcO8j8dlbCzQjDFSvnPRLex-tXTXSkUNkgSgTRvGCxdeE3zlIl42FHGD0ieATVSb0uGRVJzPVEXLBFMD5h7NtJz6AXRN0-B5IHlSWSumq4tgyd8Ar80rfFTdrp7bKTHOZIBHWyRKZBYBvo3Ayyz20Rmo",
      imgAlt: "E-commerce Engine",
      dataAlt: "A luxury e-commerce website interface shown on a sleek tablet device.",
      tags: ["Node.js", "Stripe", "PostgreSQL"],
      title: "Aura Luxury Marketplace",
      description: "High-conversion checkout system with complex state management and multi-currency localized support."
    }
  ];

  return (
    <section className="portfolio-showcase" id="projects">
      <div className="portfolio-showcase__container">
        <div className="portfolio-showcase__header">
          <div>
            <h2 className="portfolio-showcase__title">Featured Works</h2>
            <p className="portfolio-showcase__subtitle">A selection of my most challenging and impactful engineering projects.</p>
          </div>
          <a className="portfolio-showcase__action-link" href="#">
            View All Projects <span className="material-symbols-outlined">arrow_forward</span>
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;