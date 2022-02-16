import React from 'react';
import ListItem from './list-item';

const List = ({ toDos }) => {
  return (
    <ul>
      <li>
        <ListItem toDos={toDos} />
      </li>
    </ul>
  );
};

export default List;
