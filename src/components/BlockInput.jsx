import React from 'react'
import {useState} from 'react';
const BlockInput = (props) => {
    const [styleColor, setStyleColor] = useState('');
<<<<<<< HEAD
    const {colors,setColors} = props
    // const [arr, setArr] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('button pressed!')
        setColors([...colors,styleColor])
=======
    const [styleHeight, setStyleHeight] = useState('');
    const [styleWidth, setStyleWidth] = useState('');
    // const [arr, setArr] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('button pressed!');
        let holderObject = {
            bgColor: styleColor,
            height: `${styleHeight}px`,
            width: `${styleWidth}px`
        }
        console.log(holderObject);
        props.setStyle([...props.style, holderObject]);
>>>>>>> object-exploration
        setStyleColor('');
        setStyleHeight('');
        setStyleWidth('');
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Background Color:</label>
                <input type='text' onChange = {(e) => setStyleColor(e.target.value)} value = {styleColor}/>
                <label>Height:</label>
                <input type='text' onChange = {(e) => setStyleHeight(e.target.value)} value = {styleHeight}/>
                <label>Width:</label>
                <input type='text' onChange = {(e) => setStyleWidth(e.target.value)} value = {styleWidth}/>
                <input type='submit' value='Create your box'/>
            </form>
        </div>
    );
};

export default BlockInput;