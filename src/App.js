import "./App.css";
import React, { useState , useEffect} from "react";
// importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState(["all"]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  // run once when the app starts

  // useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])

  // functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default: setFilteredTodos(todos);
        break;                                                                                                 
    }
  };

  // save to local storage
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify([])); 
  };
  // getting data from local storage 
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodo = localStorage.getItem("todos", JSON.stringify(todos));
      console.log(localTodo)
    }
  }
  
  return (
    <div className="App">
      <header>
        <h1>Your To-do List </h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
