import { useState } from 'react';
import './App.css';
import List from './components/list';

function App() {
  const [toDo, setTodo] = useState('');
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === '') {
      return;
    }
    setTodos([toDo, ...toDos]);
    setTodo('');
  };

  return (
    <div>
      <h1>My toDos</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Enter what to do..."
        />
        <button>Add to do</button>
      </form>
      <List toDo={toDo} toDos={toDos} />
    </div>
  );
}

export default App;
