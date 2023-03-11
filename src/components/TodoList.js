import React from 'react';
// import styled from 'styled-components';
// import components
import Todo from './Todo';


const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {todos.map((todo) => (
            <Todo text={todo.text} key={todo.id} todos={todo} setTodos={setTodos} todo={ todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}


export default TodoList