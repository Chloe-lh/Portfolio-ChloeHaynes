import './App.css'
import { Banner } from './components/Banner/index.jsx';
import TriadicSketch from './components/TriadicSketch';
import Navbar from './components/navbar/index.jsx'; // Corrected import path

function App() {
  return (
    <div className="App">
      <div className="triadic-sketch-background">
        <TriadicSketch />
      </div>
      <Navbar /> 
      <Banner />
    </div>
  )
}

export default App
