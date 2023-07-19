import React from 'react';
import { clsx } from 'clsx';
import styles from './styles/ToDo.module.css';

const priorities = {
    Low: 'low',
    Medium: 'medium',
    High: 'high',
};

function ToDo({ toDo, onRemoveTodo }) {
    const handleButtonPress = (e) => {
        e.preventDefault();
        onRemoveTodo(e.currentTarget.parentNode);
    };
    // option 1
    function priorityStyles(priority) {
        if (priority === priorities.Low) {
            return styles.low;
        }
        if (priority === priorities.Medium) {
            return styles.medium;
        }
        return styles.high;
    }
    const classes = clsx(
        styles.toDo,
        toDo.new && styles.newToDo,
        priorityStyles(toDo.priority),
    );
    // option 2
    const classes2 = clsx(
        styles.toDo,
        toDo.new && styles.newToDo,
        toDo.priority === priorities.Low && styles.low,
        toDo.priority === priorities.Medium && styles.medium,
        toDo.priority === priorities.High && styles.high,
    );
    return (
        <div
            id={toDo.id}
            key={toDo.id + toDo.task}
            className={classes2}
            name="todo"
            value={toDo.id}
        >
            {toDo.new && 'NEW-    '}
            {toDo.task}
            -BY {toDo.dueMonth}/2023
            <button onClick={handleButtonPress} type="button">
                {' '}
                delete
            </button>
        </div>
    );
}
ToDo.priorities = priorities;

export default ToDo;
