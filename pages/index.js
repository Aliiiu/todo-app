import { useState, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid'
import Container from '../components/Container';
import Checkbox from '../components/Checkbox';
import CrossIcon from '../icons/cross';

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("my-todo-list");
    if (data) {
      setTodoList(JSON.parse(data))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("my-todo-list", JSON.stringify(todoList))
  });

  const handleUserInputChange = (event) => {
    event.preventDefault();
    setUserInput(event.target.value);
  }
  const todoHandler = (e) => {
    e.preventDefault();
    if (userInput) {
      setTodoList([
        {
          id: uuidv4(),
          task: userInput,
          done: false,
        }, ...todoList]);
      setUserInput('');
    }
  }
  const deleteTask = (id) => {
    const updateTodoList = todoList.filter((todoItem) => todoItem['id'] !== id);
    setTodoList(updateTodoList)
  }
  
  const toggleCompleted = (id) => {
    const _todoList = todoList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          done: !item.done
        };
      }

      return item;
    }) 

    setTodoList(_todoList)
  }
  return (
    <div className='flex flex-col font-body min-h-screen'>
      <header className='bg-mobile-light sm:bg-desktop-light bg-cover bg-center min-h-[200px] sm:min-h-[300px]'>
        <Container>
          <div className="flex justify-between">
            <h2 className="text-4xl font-bold pt-12 ">Todo List App</h2>
          </div>
          <form
            className='w-full flex items-center bg-white rounded-md max-w-3xl mx-auto py-8 px-7 mt-7 sm: sm:mt-12 h-10 sm:h-12 space-x-1'
            onSubmit={todoHandler}
          >
            <Checkbox disabled />
            <input 
              type="text"
              className='text-xl flex-1 border-none text-gray-900 bg-white focus:outline-none focus:ring-0'
              placeholder='Create a new todo...'
              value={userInput}
              onChange={handleUserInputChange}
            />
          </form>
        </Container>
      </header>
      
      <main className="flex-1 bg-gray-900 text-gray-100">
        <Container>
          <ul className="-mt-16 sm:-mt-28 rounded-t-md overflow-hidden">
              {
              todoList.length >= 1 ? todoList.map(({id, task, done}) => {
                return (
                  <li key={id}>
                    <div className="flex justify-between items-center space-x-3 bg-gray-800 shadow-sm py-4 px-6 border-b">
                      <input
                        type="checkbox"
                        className="p-2 rounded-full border-gray-200 bg-whitefocus:outline-none focus:ring-0"
                        checked={done}
                        onChange={() => toggleCompleted(id)}
                      />
                      <p className={`text-xl ${done && "line-through text-gray-300"}`}>{task}</p>
                      <button
                        aria-label='Delete Todo'
                        className='focus:outline-none'
                        type='button'
                        onClick={(e) => {
                          e.preventDefault();
                          deleteTask(id)
                        }}
                      ><CrossIcon /></button>
                    </div>
                  </li>
                )
              })
                : <div className="flex bg-gray-800 text-xl text-gray-100 py-4 px-6"><p>Enter a todo task</p></div>
              }
            </ul>
        </Container>
      </main>
    </div>
  )
}

export default Home;
