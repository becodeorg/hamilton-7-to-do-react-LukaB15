import React from 'react';
import './Todo.css';



export default function Todo({todo,toggleTodo,setTodos,returnId}) {

  function handleTodoClick(){
    toggleTodo(todo.id)
   console.log(todo.name);
  }
//   function handleEditing(){
//     console.log("oui")
//   }





const handledelete=(id)=>{ 

    returnId(id);
}

  return (
 
    
      <li key={todo.id}>
        <input className='check' type="checkbox" defaultChecked={todo.complete} onChange={handleTodoClick}  /> <p>{todo.name} </p>
        
        <button className='delete' onClick={()=>handledelete(todo.id)}> Delete</button>
       
      </li>
   
  
  );
}
  
 
