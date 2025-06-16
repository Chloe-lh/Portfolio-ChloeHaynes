import './App.css'
import { Banner } from './components/Banner/index.jsx';
import TriadicSketch from './components/TriadicSketch';
import Navbar from './components/navbar/index.jsx'; // Corrected import path
import Projects from './components/Projects/index.jsx';
function App() {
  return (
    <div className="App">
      <div className="triadic-sketch-background">
        <TriadicSketch />
      </div>
      <Navbar /> 
      <div className="banner-container">
      <Banner />
      </div>
      <div className="projects-container">
        <h2>Projects</h2>
        <p>Here are some of my projects. Click on the links to view the demos.</p>
        <Projects />
      </div>
    </div>
  )
}

export default App
