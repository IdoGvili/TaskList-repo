import React from 'react';
import { ColorRing } from 'react-loader-spinner';
import ToDo from './ToDo';

export default function ToDoList({ toDoList, onRemoveTodo }) {
    return toDoList === null ? (
        <div>
            <Loading />
        </div>
    ) : (
        <div>
            {toDoList.map((todo) => (
                <ToDo todo={todo} onRemoveTodo={onRemoveTodo} key={todo.id} />
            ))}
        </div>
    );
}
function Loading() {
    return (
        <>
            <h1>Loading...</h1>
            <ColorRing
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </>
    );
}
