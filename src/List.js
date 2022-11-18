import React, { useState } from "react";
import './List.css';

export default function List() {
    const initialTodos = [{id:1, name:"Todo1",complete:false}];
    const [todos, setTodos] = useState(initialTodos);


  return (
    <ul>
    {todos.map((todo) => (
      <li key={todo.id}>
        <input type="checkbox" defaultChecked={todo.complete}  /> {todo.name} 
      </li>
    ))}
  </ul>
  );
}
  
 
