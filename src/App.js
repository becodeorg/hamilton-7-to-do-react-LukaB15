import React, { useState,useEffect } from "react";
import './App.css';
import Add from './Add';
import List from './List';
import Clear from "./Clear";


const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {

   const [todos, setTodos] = useState([]);

  // const [data, setData] = useState([]);

  // const value = (person) => {
  //   setData(person);
  // }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storedTodos) {
      setTodos(storedTodos)
    }
  },[])

  useEffect(() => {
    
    if(todos.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }
  },[todos])

  function toggleTodo(id){
    // Créer nouvelle liste de Todo en créant une copie de Todo car on ne travaille jamais sur l'original-> Tjrs créer une copie, la modifier puis remplacer
      const newTodos = [...todos]
      const todo = newTodos.find(todo => todo.id === id)
      todo.complete = !todo.complete
      setTodos(newTodos)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos));
      
  }
  // const onRemove = id => e => {
  //   setTodos(todos.filter(todo => todo.id !== id));
  // };
  

  return (
    <>
      <header className="Todoapp-header">

        <h1>My To do App</h1>
    
      </header>
    <main>    
        <Add  setstate={setTodos} localkey={LOCAL_STORAGE_KEY} />
        <List todos={todos} toggleTodo={toggleTodo} setTodos={setTodos}  />
        <Clear setstate={setTodos} todos={todos} />
      </main>
    </>
     
  );
}




export default App;
