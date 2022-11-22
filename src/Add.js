import React, {useRef} from 'react';
import './Add.css';
import { v4 as uuidv4 } from 'uuid';

function Add({setstate, localkey}) {

      const inputRef = useRef();
     

      function Handleclick(e) {
           
            const inputElement = inputRef.current.value;
            // console.log(inputElement.value);
          
            if (inputElement === "") return
            setstate(prevTodos =>{
                  // localStorage.setItem(localkey, JSON.stringify([...prevTodos, {id:uuidv4(), name:inputElement , complete:false}]));
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