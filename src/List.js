import React from 'react';
import './List.css';
import Todo from './Todo';


export default function List({todos,toggleTodo,onRemove,setTodos}) {


  function deletelist(id){
    // const newTodos = [...todos];
    // newTodos.splice(id,1);
    // setTodos(newTodos);

    const filtered = todos.filter((todo)=>{
      return todo.id !== id;
    })
    setTodos(filtered)
  }
 return (
  <ul>
    {todos.map((todo) => {
      return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} setTodos={setTodos} returnId={deletelist} />
    })}
  </ul>
    

  )

}
  
 
