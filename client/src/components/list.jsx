import React from 'react';
import ListItem from './list-item';

const List = ({ toDos, removeHandler }) => {
  return (
    <ul>
      {toDos.map((toDo) => (
        <ListItem
          key={toDo.id}
          id={toDo.id}
          toDo={toDo.text}
          removeHandler={removeHandler}
        />
      ))}
    </ul>
  );
};

export default List;
