import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1, //Key
      task: "", //string
      done: false, //boolean
    },
  ]);
  const [newToDo, setNewTodo] = useState("");

  const addTodo = (task) => {
    if (!task) return;
    const newTodoList = [
      ...todos,
      { id: todos.length + 1, task: task, done: false },
    ];

    setTodos(newTodoList);
  };

  const delteTodo = (id) => {
    const newTodoList = todos.filter((item) => item.id != id);
    setTodos(newTodoList);
  };

  const changeTodoState = (id, state) => {
    const newTodoList = todos.map((item) => {
      if (item.id === id) {
        return { ...item, done: state };
      } else {
        return item;
      }
    });

    setTodos(newTodoList);
  };

  return (
    <div className="container">
      <h1>Sabrina's Wish List</h1>

      <form className="new-todo-container" onSubmit={(e) => e.preventDefault()}>
        <input
          value={newToDo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button
          onClick={() => {
            addTodo(newToDo);
            setNewTodo("");
          }}
        >
          ➕
        </button>
      </form>

      {todos.length === 0 ? (
      <p>No tasks, add a task</p>
    ) : (

      <ul className="todo-list">
        {todos.map((item) => {
          return (
            <li key={item.id} className="todo-item">
              <input
                type="checkbox"
                value={item.done}
                className={item.done ? "done" : ""}
                onChange={(e) => changeTodoState(item.id, e.target.checked)}
              />
              <span className="todo-item-text">{item.task}</span>
              <button onClick={() => delteTodo(item.id)} className="delete">
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    )}
    </div>
  );
}

export default App;
