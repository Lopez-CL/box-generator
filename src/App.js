import './App.css';
import React, {useState} from 'react';
import BlockInput from './components/BlockInput';
import BlockDisplay from './components/BlockDisplay';

function App() {
  const [style, setStyle] = useState([]);
  return (
    <div className="App">
      <BlockInput setStyle = {setStyle} style = {style}/> 
      <BlockDisplay style = {style} setStyle={setStyle}/>
    </div>
  );
}

export default App;
