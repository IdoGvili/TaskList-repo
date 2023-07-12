import React, { useState } from 'react';

function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState({
    task: '',
    date: '1',
  });

  const handleChange = (e) => {
    setUserInput({ task: e.currentTarget.value, date: userInput.date });
  };
  const handleChangeDate = (e) => {
    setUserInput({ date: e.currentTarget.value, task: userInput.task });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask(userInput);
    setUserInput({ task: '', date: '1' });
    // setUserInput("");
  };
  return (
    <>
      <h3> New Task:</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={userInput.task}
          type="text"
          onChange={handleChange}
          placeholder="Enter task..."
        />
        <button type="submit">Submit</button>
        <br />
        <label htmlFor="month">
          Due month:
          <select onChange={handleChangeDate} name="month" id="month">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </label>
        /2023
      </form>
    </>
  );
}

export default ToDoForm;
