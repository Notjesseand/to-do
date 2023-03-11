import './App.css';
import React, {useState} from 'react';
// importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Jesse's To-do List </h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
