import React from 'react';

const ListItem = ({
  id,
  toDo,
  removeHandler,
  editHandler,
  isEditing,
  setIsEditing,
}) => {
  return (
    <ul key={id}>
      <li>
        <p>{toDo}</p>
      </li>
      <button onClick={() => removeHandler(id)}>Remove</button>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </ul>
  );
};

export default ListItem;
