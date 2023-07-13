import React from 'react';
import ToDo from './ToDo';

function ToDoList({ toDoList, handleButton }) {
    return (
        <div>
            {toDoList.map((todo) => (
                <ToDo todo={todo} handleButton={handleButton} key={todo.id} />
            ))}
        </div>
    );
}

export default ToDoList;
