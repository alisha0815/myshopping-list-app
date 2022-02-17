import React, { useRef, useState } from 'react';
import './App.css';
import List from './components/list';

const App = () => {
  const inputRef = useRef();
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const inputHandler = (e) => {
    const newToDo = e.target.value;
    setToDo(newToDo);
  };

  const addHandler = (e) => {
    e.preventDefault();
    if (toDo === '') {
      return;
    }
    const input = inputRef.current.value;
    setToDos([{ text: input, id: Math.random() * 1000 }, ...toDos]);
    console.log(inputRef.current.value);
    setToDo('');
  };

  const removeHandler = (id) => {
    setToDos(toDos.filter((item) => item.id !== id));
  };

  const editHandler = (id, newInputText) => {
    const editedToDo = toDos.map((toDo) => {
      if (toDo.id === id) {
        return { ...toDo, text: newInputText };
      }
      return toDo;
    });
    setToDos(editedToDo, ...toDos);
    console.log(editedToDo);
  };

  return (
    <>
      <h2>My Shopping List</h2>
      <form>
        <input
          ref={inputRef}
          value={toDo}
          onChange={inputHandler}
          type="text"
        />
        <button onClick={addHandler}>Add to Do</button>
      </form>
      <div>
        <List
          toDos={toDos}
          removeHandler={removeHandler}
          editHandler={editHandler}
          // isEditing={isEditing}
          // setIsEditing={setIsEditing}
        />
        <div>
          {isEditing ? (
            <form>
              <input type="text" defaultValue={toDo} />
            </form>
          ) : (
            <h1 onDoubleClick={() => setIsEditing(true)}>{toDo}</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
