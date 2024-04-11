import './App.css';
import MainImg from './components/main_img.jsx'
import Imgs from './components/imgs.jsx'

function App() {
  return (
    <div className="App">
      <MainImg />
      <Imgs />
      <div className="text-block">
        Boy Tillekens is a front-end developer based in The Netherlands
      </div>
      <div className="project1">
        project here
      </div>
    </div>
  );
}

export default App;
