import React from 'react';
import { clsx } from 'clsx';
import styles from './styles/ToDo.module.css';
import Priorities from './prioritiesENUM';

function ToDo({ toDo, onRemoveTodo }) {
    const handleButtonPress = (e) => {
        e.preventDefault();
        onRemoveTodo(e.currentTarget.parentNode);
    };
    const priorityClasses = {
        [Priorities.Low]: clsx(styles.toDo, styles.low),
        [Priorities.Medium]: clsx(styles.toDo, styles.medium),
        [Priorities.High]: clsx(styles.toDo, styles.high),
    };

    const classes = priorityClasses[toDo.priority];
    return (
        <div
            id={toDo.id}
            key={toDo.id + toDo.task}
            className={classes}
            name="todo"
            value={toDo.id}
        >
            {toDo.task}
            -BY {toDo.dueMonth}/2023
            <button onClick={handleButtonPress} type="button">
                {' '}
                delete
            </button>
        </div>
    );
}

export default ToDo;
