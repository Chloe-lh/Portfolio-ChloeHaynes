import './App.css';
import TriadicSketch from './components/TriadicSketch';
import Navbar from './components/navbar/index.jsx';
import Home from './pages/Home/Home.jsx';
import Contact from './pages/Contact/contact.jsx'; // Import the Contact page
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="triadic-sketch-background">
        <TriadicSketch />
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
