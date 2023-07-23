import React, { useState } from 'react';
import clsx from 'clsx';
import ToDo from './ToDo';
import styles from './styles/ToDoForm.module.css';

function ToDoForm({ onAddTodo }) {
    const [userInput, setUserInput] = useState({
        task: '',
        date: '1',
        priority: ToDo.priorities.LOW,
    });

    const handleChange = (e) => {
        setUserInput({ ...userInput, task: e.currentTarget.value });
    };
    const handleChangeDate = (e) => {
        setUserInput({ ...userInput, date: e.currentTarget.value });
    };
    const handleChangePriority = (e) => {
        setUserInput({ ...userInput, priority: e.currentTarget.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onAddTodo(userInput);
        setUserInput({ task: '', date: '1', priority: ToDo.priorities.Low });
    };

    const classLow = clsx(styles.low);
    const classMedium = clsx(styles.medium);
    const classHigh = clsx(styles.high);
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
                <label htmlFor="priority">
                    Priority:
                    <select
                        onChange={handleChangePriority}
                        name="priority"
                        id="priority"
                    >
                        <option
                            value={ToDo.priorities.LOW}
                            className={classLow}
                        >
                            Low
                        </option>
                        <option
                            value={ToDo.priorities.MEDIUM}
                            className={classMedium}
                        >
                            Medium
                        </option>
                        <option
                            value={ToDo.priorities.HIGH}
                            className={classHigh}
                        >
                            High
                        </option>
                    </select>
                </label>
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
