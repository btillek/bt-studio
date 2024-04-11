import './App.css';
import MainImg from './components/main_img.jsx'
import Imgs from './components/imgs.jsx'

function App() {
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
      </div>
      <div className="project1">
        project here
      </div>
    </div>
  );
}

export default App;
