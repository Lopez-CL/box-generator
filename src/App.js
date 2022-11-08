import './App.css';
import React, {useState} from 'react';
import BlockInput from './components/BlockInput';
import BlockDisplay from './components/BlockDisplay';

function App() {
  const [colors, setColors] = useState([]);
  // const addStyle = (inputColor) => {(setColors(inputColor))};
  return (
    <div className="App">
      <BlockInput setColors = {setColors} colors = {colors}/> 
      <BlockDisplay colors = {colors}/>
    </div>
  );
}

export default App;
