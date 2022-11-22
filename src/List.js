import React from "react";
import './List.css';
import Todo from './Todo';


export default function List({todos,toggleTodo}) {

 return (
  <ul>
    {todos.map((todo) => {
      return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
    })}
  </ul>
    

  )

}
  
 
