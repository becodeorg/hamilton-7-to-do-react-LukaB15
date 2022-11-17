import './App.css';
import Add from './Add';
import Submit from './Submit';
import List from './List';

function App() {
  return (
    <div className="Todoapp">
      <header className="Todoapp-header">

        <h1>My To do App</h1>

      </header>

      <Add />
      <Submit />
      <List />
    </div>
     
  );
}



export default App;
