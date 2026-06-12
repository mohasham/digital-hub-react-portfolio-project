import React from 'react';
import Hero from '../../sections/hero/hero.component';
import About from '../../sections/about/about.component';
import Technologies from '../../sections/technologies/technologies.component';
import Projects from '../../sections/projects/projects.component';
import HireMe from '../../sections/hire-me/hire-me.component';
import Contact from '../../sections/contact/contact.component';

const Home = () => {
  return (
    <main>
      <Hero />
      <Technologies />
      <About />
      <Projects />
      <HireMe />
      <Contact />
    </main>
  );
};

export default Home;