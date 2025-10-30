import './App.css';
import Car1 from './Vehicle.js';
import Car3 from './Vehicle3.js';
import reactLogo from './assets/react.svg';

function App() {
  return (
    <div className="App">
      <h1>🚗 Vehicle Display App</h1>
      <Car1 />
      <Car3 />
      <img src={reactLogo} alt="React Logo" width="100" />
    </div>
  );
}

export default App;
