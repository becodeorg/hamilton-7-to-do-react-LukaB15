import React, {useRef, useState} from 'react';
import './Add.css';
import List from './List';
import { v4 as uuidv4 } from 'uuid';

function Add({value, setstate}) {

      const inputRef = useRef();
     

      function Handleclick(e) {
           
            const inputElement = inputRef.current.value;
            // console.log(inputElement.value);
            value(inputElement)
            if (inputElement === "") return
            setstate(prevTodos =>{
                  return [...prevTodos, {id:uuidv4(), name:inputElement , complete:false}]
            })
            inputRef.current.value = null;
          }

    return (
      <>
          <input ref={inputRef} className="add" type="text" placeholder='Type a new todo'/>

          <input onClick={Handleclick} className="submit" type="submit" value='Add a new todo'/>
      </>
    );
  }
  
  
  
  export default Add;