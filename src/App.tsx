import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {

  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState([]);

  const handleEdit = () => {
    
  }

  const handleDelete = () => {
    
  }

  const handleAdd = () => {

  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-8 bg-purple-200 min-h-[80vh]">
        <div className="add-todo my-5">
        <h2 className="text-lg font-bold"> add todo </h2>
          <input type="text" placeholder="Enter your todo" className="w-80"/> 
          <button onClick={handleAdd} className="bg-purple-500 hover:bg-purple-900 px-3 text-white rounded-lg m-5"> add  </button>
        </div>
      <h1 className="text-lg font-bold"> your todo </h1>
      <div className="todos">
      <div className="todo flex">
      <div className="text"> {todo} </div>
      <div className="buttons"> 
      <button onClick={handleEdit} className="bg-purple-500 hover:bg-purple-900 px-3 text-white rounded-lg mx-1"> edit </button>
      <button onClick={handleDelete} className="bg-purple-500 hover:bg-purple-900 px-3 text-white rounded-lg mx-1"> delete </button>
      </div>
      </div>
      </div>

        
      </div>
    </>
  );
}

export default App
