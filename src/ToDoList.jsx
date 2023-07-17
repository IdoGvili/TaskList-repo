import React, { useCallback, useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';
import ToDo from './ToDo';

export default function ToDoList({ toDoList, setToDoList, handleButton }) {
    const fetchData = useCallback(async () => {
        const response = await fetch(
            'https://raw.githubusercontent.com/IdoGvili/TaskList-repo/master/src/Data.json',
        );
        const fetchedData = await response.json();
        setToDoList(fetchedData);
    }, [setToDoList]);
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return toDoList.length === 0 ? (
        <div>
            <Loading />
        </div>
    ) : (
        <div>
            {toDoList.map((todo) => (
                <ToDo todo={todo} handleButton={handleButton} key={todo.id} />
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
