import React from 'react';

function ToDo({ todo, handleButton }) {
  const handleButtonPress = (e) => {
    e.preventDefault();
    handleButton(e.currentTarget.parentNode.id);
  };
  const myStyle = {
    backgroundColor: 'RGB(247, 202, 201)',
    borderStyle: 'solid',
    borderRadius: '25px',
    padding: '10px',
    fontFamily: 'Sans-Serif',
    width: '400px',
    height: '30px',
    margin: 'auto',
    fontWeight: 'bold',
  };

  return (
    <div
      style={myStyle}
      id={todo.id}
      key={todo.id + todo.task}
      className={todo.new ? 'newTask' : ''}
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
