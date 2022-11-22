import React from "react";
import './List.css';



export default function todo({todo,toggleTodo}) {

  // const [todos, setTodos] = useState([]);
  function handleTodoClick(){
    toggleTodo(todo.id)
   console.log(todo.name);
  }


  return (
 
    
      <li key={todo.id}>
        <input type="checkbox" defaultChecked={todo.complete} onChange={handleTodoClick}  /> {todo.name} 
      </li>
   
  
  );
}
  
 
