import Hero from '../../sections/hero/hero.component';
import Projects from '../../sections/projects/projects.component';
import About from '../../sections/about/about.component';
import Experience from '../../sections/experience/experience.component';
import Technologies from '../../sections/technologies/technologies.component';
import HireMe from '../../sections/hire-me/hire-me.component';
import Contact from '../../sections/contact/contact.component';

const Home = () => (
  <main>
    <Hero />
    <Projects />
    <About />
    <Experience />
    <Technologies />
    <HireMe />
    <Contact />
  </main>
);

export default Home;
