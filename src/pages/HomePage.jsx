import Home from '../components/Home';
import About from '../components/About';
import Research from '../components/Research';
import Experience from '../components/Experience';
import Blog from '../components/Blog';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main
      id="snap-scroller"
      className="snap-y snap-mandatory overflow-y-scroll h-screen"
    >
      <section id="home" className="h-screen snap-center snap-always">
        <Home />
      </section>

      <section id="experience" className="h-screen snap-center snap-always">
        <Experience />
      </section>


      <section id="research" className="h-screen snap-center snap-always">
        <Research />
      </section>

      <section id="blog" className="h-screen snap-center snap-always">
        <Blog />
      </section>

      {/* <section id="projects" className="h-screen snap-center snap-always">
        <Projects />
      </section> */}

      <section id="footer" className="snap-center snap-always">
        <Footer />
      </section>
    </main>
  );
}