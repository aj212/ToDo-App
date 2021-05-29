import { useState } from "react";
import ToDoList from './ToDoList';

const App=()=>{

  const[inputList,setInputList]=useState('');
  const[items,setItems]=useState([]);

  
  const itemEvent=(event)=>{
    setInputList(event.target.value);
  }

  const listOfItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    })
    setInputList("");
  }

  const deleteItems=(id)=>{
   setItems((oldItems)=>{
     return oldItems.filter((arrElem,index)=>{
       return index!== id;
     })
   })
  }

 

  return(
  <>
    <div className="maindiv">
      <div className="innerdiv">
        <h1 className="heading">ToDo App</h1>
        <input className="input"
         placeholder="Add Items"
         onChange={itemEvent}
         value={inputList}
        />
        <button onClick={listOfItems} 
        disabled={!inputList}
        name="submit"
        id="btn"
        className="add">
        <i class=" icon fa fa-plus-circle" aria-hidden="true"></i>
        </button>
        <ol>
           {items.map((itemVal,index)=>{
             return <ToDoList
               id={index}
               key={index}
               text={itemVal}
               onSelect={deleteItems}
             />
           })}
         </ol>
      </div>
    </div>
  </>
  );
}

export default App;