import React from 'react';
import './App.css';

function ToDo({ todo, handleButton }) {
  const handleButtonPress = (e) => {
    e.preventDefault();
    handleButton(e.currentTarget.parentNode.id);
  };

  let className = 'task';
  if (todo.new) {
    className += ' newTask';
  }
  return (
    <div
      id={todo.id}
      key={todo.id + todo.task}
      className={className}
      name="todo"
      value={todo.id}
    >
      {todo.task}
      -BY {todo.dueMonth}/2023
      <button onClick={handleButtonPress} type="button">
        {' '}
        delete
      </button>
    </div>
  );
}

export default ToDo;
