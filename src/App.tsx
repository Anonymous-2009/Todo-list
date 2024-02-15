import Navbar from './components/Navbar';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState([]);

  const handleEdit = () => {
    
  }

  const handleDelete = (event,id) => {
    let newTodos = todos.filter((item) => {
     return item.id !== id;
    });
    setTodos(newTodos);
  }

  const handleAdd = () => {
    setTodos([...todos, 
{id:uuidv4(),todo,iscompleted:false}])
    setTodo("");
  }

  const handleChange = (event) => {
    setTodo(event.target.value);
  }
  
  const handleCheckbox = (event) => {
  let id = event.target.name 
  let index = todos.findIndex((item) => {
     return item.id === id;
   })
    let newTodos = [...todos];
    newTodos[index].iscompleted = !newTodos[index].iscompleted;
    setTodos(newTodos);
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
        {todos.length === 0 && <div>   no todo to display </div>}
        {
       todos.map((props) => {
        return  (
      <div key={props.id} className="todo flex w-1/4 justify-between my-3">
        <div className="flex gap-5">
       <input onChange={handleCheckbox} type="checkbox" value={props.isCompleted} name={props.id}/>
      <div className={props.isCompleted?"line-through":""}> {props.todo} </div>
        </div>
      <div className="buttons"> 
      <button onClick={handleEdit} className="bg-purple-500 hover:bg-purple-900 px-3 text-white rounded-lg mx-1"> edit </button>
      <button onClick={(event)=>handleDelete(event,props.id)} className="bg-purple-500 hover:bg-purple-900 px-3 text-white rounded-lg mx-1"> delete </button>
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
