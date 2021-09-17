import React,{useState} from 'react'
import { useTodoLayerValue } from './context/TodoContext'
import TodoList from './components/TodoList'



const App = () => {
  const [{ todos },dispatch]=useTodoLayerValue();
  const [content,setContent] = useState("");

  const handleSubmit=(event) =>{
    
    event.preventDefault();

    if(!content) return;
    const newTodo ={
      id: Math.floor(Math.random() *428374324),
      content,
      isCompleted :false

    };
    dispatch({
      type: 'Add-todo',
      payload: newTodo,
    });
    setContent( ' ');
  };
  
  console.log(todos);
  return (
   <div className="container">
     <form onSubmit={handleSubmit} className="todo-form">
       <input className="todo-input" onChange={(event => setContent(event.target.value))} value={content}
       />

      <button className="todo-button">Ekle</button>
     </form>
 {/* Todo Listesi */}
 {/* <TodokList todos={todos}/> */}
   </div>
  )
}

export default App

