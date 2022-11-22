import React from 'react'
import './Clear.css';

export default function Clear({todos, setstate, localkey}) {

    function handleClearTodos(){
        const newTodos = todos.filter(todo => !todo.complete)
        setstate(newTodos)
        

    }

  return (
    <button className='clear' onClick={handleClearTodos} > Clear Todos checked</button>
  )
}
