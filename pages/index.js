import { useState } from 'react';
import Container from '../components/container';
import Checkbox from '../components/Checkbox';
import CrossIcon from  '../icons/cross'
const Home = () => {
  const [userInput, setUserInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  // const [taskDone, setTaskDone] = useState(false);

  const handleUserInputChange = (event) => {
    event.preventDefault();
    setUserInput(event.target.value);
  }
  const todoHandler = (e) => {
    e.preventDefault();
    setTodoList([userInput, ...todoList]);
    setUserInput('');
  }
  const deleteTask = (todo) => {''
    const updateTodoList = todoList.filter((todoItem) => todoList.indexOf(todoItem) !== todoList.indexOf(todo));
    setTodoList(updateTodoList)
  }
  
  // const handleTaskToggle = () => {
  //   setTaskDone(!taskDone)
  // }
  // const listControl = taskDone ? 'done' : '';
  return (
    <div className='flex flex-col font-body min-h-screen'>
      <header className='bg-mobile-light dark:bg-mobile-dark sm:bg-desktop-light sm:dark:bg-desktop-dark bg-cover bg-center min-h-[200px] sm:min-h-[300px]'>
        <Container>
          <div className="flex justify-between">
            <h2 className="text-4xl font-bold pt-12 ">Todo List App</h2>
          </div>
          <form
            className='w-full flex items-center bg-white rounded-md max-w-3xl mx-auto py-8 px-7 mt-7 sm:mt-12 h-10 sm:h-12 space-x-1'
            onSubmit={todoHandler}
          >
            <Checkbox disabled />
            <input 
              type="text"
              className='flex-1 border-none text-3xl text-gray-900 bg-white py-3 focus:outline-none focus:ring-0'
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
              todoList.length >= 1 ? todoList.map((todo, idx) => {
                return (
                  <li key={idx}>
                    <div className="flex justify-between items-center space-x-3 bg-gray-800 dark:bg-gray-800 shadow-sm py-4 px-6 border-b dark:border-gray-700">
                      <Checkbox />
                      <p className='text-3xl'>{todo}</p>
                      <button
                        aria-label='Delete Todo'
                        className='focus:outline-none'
                        type='button'
                        onClick={(e) => {
                          e.preventDefault();
                          deleteTask(todo)
                        }}
                      ><CrossIcon /></button>
                    </div>
                  </li>
                )
                {/* return <li key={idx} onClick={handleTaskToggle} className={listControl}>{todo} -{idx} <button onClick={(e) => {
                  e.preventDefault();
                  deleteTask(todo)
                }}>Delete</button></li> */}
              })
                : <div className="flex bg-gray-800 text-3xl text-gray-100 py-4 px-6"><p>Enter a todo task</p></div>
              }
            </ul>
        </Container>
      </main>
    </div>
  )
}

export default Home;
