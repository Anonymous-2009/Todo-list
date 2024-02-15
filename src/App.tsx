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
    setTodos([...todos, 
    {todo,iscompleted:false}]);
    setTodo("");
  }

  const handleChange = (event) => {
    setTodo(event.target.value);
  }
  
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-8 bg-purple-200 min-h-[80vh]">
        <div className="add-todo my-5">
        <h2 className="text-lg font-bold"> add todo </h2>
          <input onChange={handleChange} type="text" value={todo} className="w-80"/> 
          <button onClick={handleAdd} className="bg-purple-500 hover:bg-purple-900 px-3 text-white rounded-lg m-5"> add </button>
        </div>
      <h1 className="text-lg font-bold"> your todo </h1>
      <div className="todos">
        {
       todos.map((props) => {
        return  (
      <div className="todo flex w-1/4 justify-between my-3">
        <input type="checkbox"/>
      <div className={props.iscompleted?"":"line-through"}> {props.todo} </div>
      <div className="buttons"> 
      <button onClick={handleEdit} className="bg-purple-500 hover:bg-purple-900 px-3 text-white rounded-lg mx-1"> edit </button>
      <button onClick={handleDelete} className="bg-purple-500 hover:bg-purple-900 px-3 text-white rounded-lg mx-1"> delete </button>
      </div>
      </div>
          )
        })}
      </div>

        
      </div>
    </>
  );
}

export default App
