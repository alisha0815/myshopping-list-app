import React from 'react';

const ListItem = ({ id, toDo, removeHandler }) => {
  return (
    <ul key={id}>
      <li>
        <p>{toDo}</p>
      </li>
      <button onClick={removeHandler}>Remove</button>
    </ul>
  );
};

export default ListItem;
