import React from 'react';

const ListItem = ({ toDos }) => {
  return (
    <>
      <ul>
        {toDos.map((item, indx) => (
          <li key={indx}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ListItem;
