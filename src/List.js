import React, { useState } from "react";
import './List.css';

export default function List() {
    const initialTodos = [{id:1, name:"Todo1",complete:true}];
    const [todos, setTodos] = useState(initialTodos);


  return (
    <ul>
    {todos.map((todo) => (
      <li key={todo}>
        <input type="checkbox" defaultChecked={todo.complete}  /> {todo.name} 
      </li>
    ))}
  </ul>
  );
}
  
 
