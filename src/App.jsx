import { useState } from "react"
import './App.css';

function App() {
const [todo, setTodo] = useState([
  {id:1, //Key
  task: "Wish List", //string
completed: false, //boolean
},
]);

const [newWishItem, setWishItem] = useState("")

const addWishItem = (task) => {
  const newWishListItem = [
    ...todo,
    {id:todo.length + 1, task:task, completed: false},
  ];
  setTodo(newWishListItem)
  }

return (
    <div className="container">
      <h1>Sabrina's Wish List
      </h1>
      
      <div className="new-wish-list-container">
        <input 
        value={newToDo} 
        onChange={event=> setWishItem(event.target.value)} 
        />

        <button 
        onClick={()=>{
          addToDo(newToDo);
          setNewToDo("")
          }}>
          ➕
          </button>
      </div>

      <ul className="wish-list">           
      {todo.map((item) =>{
        return(
          <li key= {item.id} className="wish-list-items">
          <input type="checkbox" value={item.completed} />
          <span>{item.task}</span>
          <button className="delete">❌</button>
          </li>
        )
      })}

      </ul>
    </div>
  )
}

export default App
