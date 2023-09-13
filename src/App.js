import logo from './logo.svg';
import './App.css';
import NavigationBar from './NavigationBar';
import HeroSlider from './HeroSlider';

function App() {
  return (
    <div className="App">
      <div className="content">
        <NavigationBar />
        <HeroSlider />
        <h1>Content Goes here</h1>
      </div>
    </div>
  );
}

export default App;
