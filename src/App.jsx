import './App.css';
import MainImg from './components/main_img.jsx'
import Imgs from './components/imgs.jsx'
import Project1 from './components/project1.jsx'
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
      <div className="navbar-container">
        <div className="navbar">
          Boy Tillekens
        </div>
      </div>
      <MainImg />
      <Imgs />
      <div className="text-block">
      Boy Tillekens is a front-end developer with a background in animation and graphic design. Recently graduated from Le Wagon, designing and building a real-time multiplayer chess app.
      <div className="social-links">
        <a className="social" href="https://github.com/btillek">GitHub</a>
        <a className="social" href="#">Instagram</a>
      </div>
      </div>
      <div className="project1">
        <Project1 />
      </div>
    </div>
  );
}

export default App;
