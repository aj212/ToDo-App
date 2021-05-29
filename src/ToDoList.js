import React from 'react';

const ToDoList=(props)=>{
return( 
    <>
    <div className="todo">
    <button onClick={()=>{
        props.onSelect(props.id);
    }} 
    className="remove">Done✅</button>
    <li className="list-item">{props.text}</li>
 </div>
</>
)}

export default ToDoList;