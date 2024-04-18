import './App.css';
import MainImg from './components/main_img'
import Imgs from './components/imgs'
import Project1 from './components/project1'
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
      {/* <div className="navbar-container">
        <div className="navbar">
          BTAnimation
        </div>
      </div> */}
      <MainImg />
      <Imgs />
      <div className="text-block">
        BT Studio is based in The Netherlands, creating animated music videos, short films, and visualizers.
        <br /><br /> Clients include <em>Universal Music Group, Capitol Music Group, DICE, Giphy, Quicksilver.</em>
      </div>
      <div className="project1">
        <Project1 />
      </div>
    </div>
  );
}

export default App;
