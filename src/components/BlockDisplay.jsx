import React from 'react'
import {useState} from 'react';
<<<<<<< HEAD

const BlockDisplay = (props) => {
=======
const BlockDisplay = (props) => {
    const {style} = props;
>>>>>>> object-exploration
    return (
        <div id='container'>
        {
<<<<<<< HEAD
            props.colors.map( (item, index) => (
                <div key={index} className='created-block' style={{backgroundColor: item}}>
=======
            style.map( (item, index) => (
                <div key={index} className='created-block' style={{backgroundColor: item.bgColor, height: item.height, width: item.width}}>
>>>>>>> object-exploration

                </div>
                // the html for the box and each color passed into the array
            )) 

        }
        </div>
    );
};
export default BlockDisplay;


        // let blockHolder = document.getElementById('container');
        // let blockContent = document.createElement('div');
        // blockContent.style = `background-color: ${color};` 
        // console.log(color);
        // blockContent.className = "created-block";
        // blockHolder.appendChild(blockContent);
        // setColor('');
        // setMsg('');