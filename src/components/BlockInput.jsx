import React from 'react'
import {useState} from 'react';
const BlockInput = (props) => {
    const [styleColor, setStyleColor] = useState();
    // const [arr, setArr] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('button pressed!')
        props.getColor(styleColor)
        setStyleColor('');
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange = {(e) => setStyleColor(e.target.value)}/>
                <input type='submit' value='Create your box'/>
            </form>
        </div>
    );
};

export default BlockInput;