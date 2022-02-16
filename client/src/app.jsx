import { useState } from 'react';
import './App.css';
import List from './components/list';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);

  const inputHandler = (e) => {
    const newToDo = e.target.value;
    setToDo(newToDo);
  };

  const addHandler = (e) => {
    e.preventDefault();
    setToDos([{ text: toDo, id: Math.random() * 1000 }, ...toDos]);
    console.log(toDos);
    setToDo('');
  };

  const removeHandler = (id) => {
    setToDos(toDos.filter((item) => item.id !== id));
  };

  return (
    <>
      <h2>My Shopping List</h2>
      <form>
        <input value={toDo} onChange={inputHandler} type="text" />
        <button onClick={addHandler}>Add to Do</button>
      </form>
      <div>
        <List toDos={toDos} removeHandler={removeHandler} />
      </div>
    </>
  );
}

export default App;
