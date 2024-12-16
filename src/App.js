import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/navbar';
import Skill from './components/Skills';
import Works from './components/Works';

function App() {
  return (
     <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Works />
      <Contact />
     </div>
  );
}

export default App;
