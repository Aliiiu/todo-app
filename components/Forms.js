import { useState } from 'react';
import Checkbox from './Checkbox';

const Form = () => {
  const [userInput, setUserInput] = useState('');

  const handleUserInputChange = (event) => {
    event.preventDefault();
    setUserInput(event.target.value);
  }

  const todoHandler = (e) => {
    e.preventDefault();
    if (!userInput) return;
    setTodoList([userInput, ...todoList]);
    setUserInput('');
  }

  return (
    <form
      className='w-full flex items-center bg-white dark:bg-gray-800 rounded-md max-w-md mx-auto px-7 mt-7 sm:mt-12 h-10 sm:h-12 space-x-1'
      onSubmit={todoHandler}
    >
      <Checkbox disabled />
      <input 
        type="text"
        className='flex-1 border-none text-gray-900 sm:text-base bg-white dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-0'
        placeholder='Create a new todo...'
        value={userInput}
        onChange={handleUserInputChange}
      />
    </form>
  )
}

export default Form;

{/* <form className='pt-12'>
        <input
          type="text"
          value={userInput}
          className="w-1/2 text-gray-900 px-4 py-2 rounded"
          placeholder='Enter your task'
          name='todo-action'
          onChange={handleUserInputChange} />
        <button onClick={submitHandler}>Add Task</button>
      </form> */}