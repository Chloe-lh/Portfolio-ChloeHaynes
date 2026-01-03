import './styles.css'
import { Banner } from '../../components/Banner/index.jsx';
import Projects from '../../components/Projects/index.jsx';
import Skills from '../../components/Skills/index.jsx';

export default function Home({ projectRef }) {
  return (
    <>
      <div className="banner-container">
        <Banner />
      </div>
      {/* <div className="skills-container">
        <Skills />
      </div> */}
      {/* <div className="links-container">
        <Links/>
      </div> */}
      <section className="projects-container" ref={projectRef}>
        <h2>Projects</h2>
        <p>Here are some of my projects. Click on the links to view the demos.</p>
        <Projects />
      </section>
    </>
  )
}
