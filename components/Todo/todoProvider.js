import TodoContext from "./todo-context";
import { useReact } from 'react';

const todoReducer = (state, action) => {
  return { task: [] };
}

const TodoProvider = () => {
  const [todoState, dispatchTodoAction] = useReducer(todoReducer, { task: [] })
  
  const addTaskToList = () => {
    dispatchTodoAction({type: 'ADD'})
  }

  const removeTaskToList = () => {
    dispatchTodoAction({type: 'REMOVE'})
  }
}