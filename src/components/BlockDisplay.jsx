import React from 'react'
import {useState} from 'react';
const clrArr = [];
const BlockDisplay = (props) => {
    clrArr.push(props.passColor);
    return (
        <div>
            <p>{clrArr}</p>
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