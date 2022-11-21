import React, { useState } from "react";
import './List.css';



export default function List({todos}) {

  return (
    <ul>
    {todos.map((todos) => (
      <li key={todos.id}>
        <input type="checkbox" defaultChecked={todos.complete}   /> {todos.name} 
      </li>
    ))}
  </ul>
  );
}
  
 
