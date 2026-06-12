import React from 'react';
import './skills.styles.scss';

const Skills = () => {
  const ecosystemData = [
    {
      title: "Frontend",
      icon: "terminal",
      items: ["React & Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend",
      icon: "database",
      items: ["Node.js / Express", "PostgreSQL / MongoDB", "Prisma / Drizzle", "Redis Caching"]
    },
    {
      title: "Tools",
      icon: "construction",
      items: ["Docker & CI/CD", "Git / GitHub", "AWS / Vercel", "Postman & Unit Testing"]
    }
  ];

  return (
    <>
      {/* Technical Ecosystem Section */}
      <section className="tech-ecosystem" id="expertise">
        <div className="tech-ecosystem__container">
          <div className="tech-ecosystem__header">
            <h2 className="tech-ecosystem__title">Technical Ecosystem</h2>
            <p className="tech-ecosystem__subtitle">
              A comprehensive toolkit curated for building modern, scalable, and resilient digital products.
            </p>
          </div>

          <div className="tech-ecosystem__grid">
            {ecosystemData.map((block, idx) => (
              <div key={idx} className="tech-ecosystem__card">
                <div className="tech-ecosystem__icon-wrapper">
                  <span className="material-symbols-outlined tech-ecosystem__icon">
                    {block.icon}
                  </span>
                </div>
                <h3 className="tech-ecosystem__card-title">{block.title}</h3>
                <ul className="tech-ecosystem__list">
                  {block.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="tech-ecosystem__item">
                      <span className="tech-ecosystem__bullet"></span>
                      <span className="tech-ecosystem__text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="core-expertise">
        <div className="core-expertise__container">
          <div className="core-expertise__grid">
            
            {/* MVC Card */}
            <div className="core-expertise__card core-expertise__card--featured">
              <div className="core-expertise__card-content">
                <h3 className="core-expertise__title">MVC Pattern Mastery</h3>
                <p className="core-expertise__desc">
                  Structuring applications for longevity and scalability using time-tested architectural principles and separation of concerns.
                </p>
              </div>
              <span className="material-symbols-outlined core-expertise__bg-icon">
                architecture
              </span>
            </div>

            {/* Auth & Security */}
            <div className="core-expertise__card core-expertise__card--highest">
              <span className="material-symbols-outlined core-expertise__icon">security</span>
              <div className="core-expertise__card-footer">
                <h3 className="core-expertise__sub-title">Auth &amp; Security</h3>
                <p className="core-expertise__sub-desc">
                  Implementing robust OAuth2, JWT, and RBAC systems to safeguard sensitive user data.
                </p>
              </div>
            </div>

            {/* Responsive Logic */}
            <div className="core-expertise__card core-expertise__card--container">
              <span className="material-symbols-outlined core-expertise__icon">devices</span>
              <div className="core-expertise__card-footer">
                <h3 className="core-expertise__sub-title">Responsive Logic</h3>
                <p className="core-expertise__sub-desc">
                  Fluid layouts that adapt seamlessly from mobile-first to widescreen ultra-HD monitors.
                </p>
              </div>
            </div>

            {/* RESTful APIs */}
            <div className="core-expertise__card core-expertise__card--tertiary">
              <span className="material-symbols-outlined core-expertise__icon">api</span>
              <div className="core-expertise__card-footer">
                <h3 className="core-expertise__sub-title">RESTful APIs</h3>
                <p className="core-expertise__sub-desc">
                  Crafting clean, documented, and high-throughput endpoints for seamless service integration.
                </p>
              </div>
            </div>

            {/* Clean Code */}
            <div className="core-expertise__card core-expertise__card--high">
              <span className="material-symbols-outlined core-expertise__icon">code</span>
              <div className="core-expertise__card-footer">
                <h3 className="core-expertise__sub-title">Clean Code</h3>
                <p className="core-expertise__sub-desc">
                  Adhering to SOLID principles and DRY patterns for maintainable and readable codebases.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;