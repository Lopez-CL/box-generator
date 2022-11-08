import React from 'react'
import {useState} from 'react';
const arr = []
const BlockDisplay = (props) => {
    arr.push(props.passColor);
    return (
        <div>
        {
            arr.map( (item) => (
                <div className='created-block' style={item}>

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