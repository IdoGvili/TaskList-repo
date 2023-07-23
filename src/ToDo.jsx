import React from 'react';
import { clsx } from 'clsx';
import styles from './styles/ToDo.module.css';

const priorities = {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high',
};

function ToDo({ toDo, onRemoveTodo }) {
    const handleButtonPress = (e) => {
        e.preventDefault();
        onRemoveTodo(e.currentTarget.parentNode);
    };

    const classes = clsx(styles.toDo, {
        [styles.newToDo]: toDo.new,
        [styles.low]: toDo.priority === priorities.LOW,
        [styles.medium]: toDo.priority === priorities.MEDIUM,
        [styles.high]: toDo.priority === priorities.HIGH,
    });

    return (
        <div
            id={toDo.id}
            key={toDo.id + toDo.task}
            className={clsx(styles.toDo, {
                [styles.newToDo]: !!toDo.new,
                [styles.low]: toDo.priority === priorities.LOW,
                [styles.medium]: toDo.priority === priorities.MEDIUM,
                [styles.high]: toDo.priority === priorities.HIGH,
            })}
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
