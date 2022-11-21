import React, { useState } from "react";
import './App.css';
import Add from './Add';
import List from './List';
import { v4 as uuidv4 } from 'uuid';




function App() {

  // const initialTodos = [{id:uuidv4(),name:"Todo1",complete:true},{id:uuidv4(),name:"Todo2",complete:false}];
  const [todos, setTodos] = useState([]);

  const [data, setData] = useState("");

  const value = (person) =>{
    setData(person);
  }
  

  return (
    <>
      <header className="Todoapp-header">

        <h1>My To do App</h1>
    
      </header>
    <main>    
        <Add value={value} setstate={setTodos} />
        <List todos={todos}/>
      </main>
    </>
     
  );
}




export default App;
