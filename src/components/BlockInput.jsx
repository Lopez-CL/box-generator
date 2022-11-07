import React from 'react'
import {useState} from 'react';
const BlockInput = () => {
    const [color, setColor] = useState('');
    const [msg, setMsg] = useState('We could use some boxes here??');
    const handleInput = (e) => {setColor(e.target.value)};
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('button pressed!')
        let blockHolder = document.getElementById('container');
        let blockContent = document.createElement('div');
        blockContent.style = `background-color: ${color};` 
        console.log(color);
        blockContent.className = "created-block";
        blockHolder.appendChild(blockContent);
        setColor('');
        setMsg('');
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleInput} value={color}/>
                <input type='submit' value='Create your box'/>
            </form>
            {msg}
            <div className='container'id='container'>
            </div>
        </div>
    );
};

export default BlockInput;