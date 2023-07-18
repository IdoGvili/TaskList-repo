import React from 'react';
import styles from './styles/ToDo.module.css';

function ToDo({ toDo, onRemoveTodo }) {
    const handleButtonPress = (e) => {
        e.preventDefault();
        onRemoveTodo(e.currentTarget.parentNode);
    };

    let className = styles.toDo;
    if (toDo.new) {
        className = styles.newToDo;
    }
    return (
        <div
            id={toDo.id}
            key={toDo.id + toDo.task}
            className={className}
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
