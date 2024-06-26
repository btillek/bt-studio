import './App.css';
import MainImg from './components/main_img'
import Imgs from './components/imgs'
import Projects from './components/projects'
import Lenis from '@studio-freight/lenis'

function App() {

  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return (
    <div className="App">
      <MainImg />
      <Imgs />
      <div className="text-block-container">
        <div className="text-block">
          BT Studio creates animated music videos, short films, and visualizers.
          <br /><br /> Clients include <em>Universal Music Group, Capitol Music Group, DICE, Giphy, Quicksilver.</em>
        </div>
      </div>
      <div className="project1">
        <Projects />
      </div>
    </div>
  );
}

export default App;
