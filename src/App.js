import './App.css';
import React, {useState} from 'react';
import BlockInput from './components/BlockInput';
import BlockDisplay from './components/BlockDisplay';

function App() {
<<<<<<< HEAD
  const [colors, setColors] = useState([]);
  // const addStyle = (inputColor) => {(setColors(inputColor))};
  return (
    <div className="App">
      <BlockInput setColors = {setColors} colors = {colors}/> 
      <BlockDisplay colors = {colors}/>
=======
  const [style, setStyle] = useState([]);
  return (
    <div className="App">
      <BlockInput setStyle = {setStyle} style = {style}/> 
      <BlockDisplay style = {style}/>
>>>>>>> object-exploration
    </div>
  );
}

export default App;
