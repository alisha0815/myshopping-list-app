import React from 'react';
import ListItem from './list-item';

const List = ({
  toDos,
  removeHandler,
  editHandler,
  isEditing,
  setIsEditing,
}) => {
  return (
    <ul>
      {toDos.map((toDo) => (
        <ListItem
          key={toDo.id}
          id={toDo.id}
          toDo={toDo.text}
          removeHandler={removeHandler}
          editHandler={editHandler}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      ))}
    </ul>
  );
};

export default List;
