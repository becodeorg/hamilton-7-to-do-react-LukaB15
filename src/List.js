import './List.css';
function List() {
    return (
        <div className='todoapp-list'>
        <h3>Todos</h3>
          <label>
              <input type="checkbox"/>
              Learn React
          </label>
          <br/>
          <label>
              <input type="checkbox"/>
              Be awesome !
          </label>
      </div>
    );
  }
  
  
  
  export default List;