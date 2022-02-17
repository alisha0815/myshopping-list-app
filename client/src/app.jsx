import React, { useRef, useState } from 'react';
import './App.css';
import List from './components/list';

const App = () => {
  const inputRef = useRef();
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [newInputText, setnewInputText] = useState('');

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
    setToDos(editedToDo);
    console.log('edited to do', editedToDo);
  };

  //  to track new input text
  const editHandleChange = (e) => {
    setnewInputText(e.target.value);
    console.log(newInputText);
  };

  // edit submit

  const editSubmitHandler = (e) => {
    console.log('event', e);
    e.preventDefault();
    console.log('newinput===>', newInputText);
    // editHandler(e.target.id, newInputText);
    setToDo(newInputText);
    setIsEditing(false);
    setnewInputText('');
    console.log('value==>', typeof e.target.value);
  };

  const viewTemplate = (
    <form>
      <input
        ref={inputRef}
        value={toDo}
        id={toDo.id}
        onChange={inputHandler}
        type="text"
      />
      <button onClick={addHandler}>Add to Do</button>
    </form>
  );

  const editingTemplate = (
    <form>
      <label htmlFor={toDo.id}>New name for {toDo.text}</label>
      <input
        ref={inputRef}
        value={newInputText}
        id={toDo.id}
        onChange={editHandleChange}
        type="text"
      />
      <button type="submit" onClick={editSubmitHandler}>
        Update to Do
      </button>
      <button type="submit" onClick={editHandler}>
        Cancel
      </button>
    </form>
  );

  return (
    <>
      <h2>My Shopping List</h2>
      <li>{isEditing ? editingTemplate : viewTemplate}</li>

      <div>
        <List
          toDos={toDos}
          removeHandler={removeHandler}
          editHandler={editHandler}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      </div>
    </>
  );
};

export default App;
