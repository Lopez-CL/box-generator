import React from 'react'
import {useState} from 'react';
const BlockInput = (props) => {
    const [styleColor, setStyleColor] = useState('');
    const {colors,setColors} = props
    // const [arr, setArr] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('button pressed!')
        setColors([...colors,styleColor])
        setStyleColor('');
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange = {(e) => setStyleColor(e.target.value)} value = {styleColor}/>
                <input type='submit' value='Create your box'/>
            </form>
        </div>
    );
};

export default BlockInput;