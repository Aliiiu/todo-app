import React from 'react';

const TodoContext = React.createContext({
  task: [],
  addTask: () => { },
  removeTask: (todo) => { }
});

export default TodoContext;