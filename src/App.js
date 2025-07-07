import React, {useState} from 'react';
import './App.css';
import Visualizer from './components/Visualizer';

function App(props) {

  const [overlay, setOverlay] = useState(false);

  function handleOverlay() {
    setOverlay(!overlay);
  }

  return (
    <div className="App">
      <div className="engraver-control">
        <button className="engraver-control-btn" onClick={handleOverlay}>Editor öffnen</button>
      </div>
        <Visualizer />
    </div>
  );
}

export default App;
