import { useEffect, useState } from "react";
import "./App.css";
import { addDoc, collection, deleteDoc, doc, getDocs,  } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [todo, setTodo] = useState([]);
  const [newTodoText, setNewTodoText] = useState("");

  const updateToDoState = (id, state) => {
  };
  
  const updateToDoText = (id, task) => {
    };
  
  const addTodo = async(task) => {
    if (!task) return;
    const taskReference = collection(db, "todo");
    await addDoc(taskReference, {
      task:task,
      done: false,
     }).then((docRef) => {
      const newTodo = [
        ...todo,
      { id: docRef.id, task: task, done: false },
    ];
    setTodo(newTodo);
  });
  }

  const delteTodo = async(id) => {
    await deleteDoc(doc(db, "todo", id))
    const newToDo = todo.filter((item) => item.id !== id);
    setTodo(newToDo);
  };

  useEffect(() =>{
    const todoReference = collection(db, "todo");

    const getData = async() => {
      const data = await getDocs(todoReference);
      const todo =data.docs.map((doc) => ({
        id:doc.id,
        ...doc.data(),
      }));
      setTodo(todo);
    };
    getData()
  },[]);

  const changeTodoState = (id, state) => {
    const newToDo = todo.map((item) => {
      if (item.id === id) {
        return { ...item, done: state };
      } else {
        return item;
      }
    });

    setTodo(newToDo);
  };

  return (
    <div className="container">
      <h1>Sabrina's Wish List</h1>

      <form className="new-todo-container" onSubmit={(e) => e.preventDefault()}>
        <input
          value={newTodoText}
          onChange={(event) => setNewTodoText(event.target.value)}
        />
        <button
          onClick={() => {
            addTodo(newTodoText);
            setNewTodoText("");
          }}
        >
          ➕
        </button>
      </form>

      {todo.length === 0 ? (
      <p>No tasks, add a task</p>
    ) : (

      <ul className="todo-list">
        {todo.map((item) => {
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
