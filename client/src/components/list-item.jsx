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
      {/* create new input field */}
      <button onClick={() => editHandler(id)}>Edit</button>
    </ul>
  );
};

export default ListItem;
