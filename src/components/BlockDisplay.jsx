import React from 'react'
import {useState} from 'react';
const BlockDisplay = (props) => {
    const {style, setStyle} = props;
    const [color, setColor] = useState();
    const changeColor = (idx) => {
        const boxUpdate = style.map((item, index)=>{
            if(idx == index){
                item.bgColor = color;
            }
            return item;
        })
        setStyle(boxUpdate);
        console.log(boxUpdate)
        setColor('');
    }
    const deleteItem = (idx) =>{
        const boxDelete = style.filter((item,index)=>{
            return  idx !== index
        })
        setStyle(boxDelete);
        // don't need to add brackets because we are not creating a new array. Just passing an update one already created.

        console.log(style);
    }
    return (
        <div id='container'>
        {
            style.map( (item, index) => (
                <>
                    <div key={index} className='created-block' style={{backgroundColor: item.bgColor, height: item.height, width: item.width}}>
                    </div>
                    <input onChange={(e)=>setColor(e.target.value)}/>
                    <div>
                        <button onClick={()=>changeColor(index)}>Change Color!</button>
                    </div>
                    <div>
                        <button onClick={()=>deleteItem(index)}>Remove Box!</button>
                    </div>
                </>
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