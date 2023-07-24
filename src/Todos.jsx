import React, { useState, useCallback, useEffect } from 'react';
import { v4 } from 'uuid';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import Search from './Search';
import ToDo from './ToDo';

function Todos() {
    const [toDoList, setToDoList] = useState(null);

    const onRemoveTodo = ({ id: toDoId }) => {
        const mapped = toDoList.map((toDo) =>
            toDo.id === toDoId
                ? { ...toDo, complete: !toDo.complete }
                : { ...toDo },
        );
        setToDoList(mapped);

        const filtered = mapped.filter((toDo) => !toDo.complete);

        setToDoList(filtered);
    };

    const addTodo = (newTask, newDate, newPriority) => {
        const before = toDoList.filter((toDo) => toDo.dueMonth < newDate);
        const after = toDoList.filter((toDo) => toDo.dueMonth >= newDate);

        const copy = [
            ...before,
            {
                id: v4(),
                task: newTask,
                complete: false,
                dueMonth: newDate,
                new: true,
                show: true,
                priority: newPriority,
            },
            ...after,
        ];

        setToDoList(copy);
    };

    const fetchData = useCallback(async () => {
        const response = await fetch(
            'https://raw.githubusercontent.com/IdoGvili/TaskList-repo/master/src/Data.json',
        );
        const fetchedData = await response.json();
        const newData = fetchedData.map((toDo) => ({
            ...toDo,
            id: v4(),
            show: true,
            priority: ToDo.priorities.LOW,
        }));
        console.log('fdf');
        setToDoList(newData);
    }, []);
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const filterToDoList = useCallback(
        (e) => {
            const searchTerm = e.target.value;
            setToDoList(
                toDoList.map((toDo) => {
                    const regex = new RegExp(searchTerm, 'i');
                    if (regex.test(toDo.task)) {
                        return { ...toDo, show: true };
                    }
                    return { ...toDo, show: false };
                }),
            );
        },
        [toDoList],
    );
    return (
        <>
            <ToDoList toDoList={toDoList} onRemoveTodo={onRemoveTodo} />
            <ToDoForm addTodo={addTodo} />
            <Search filterToDoList={filterToDoList} />
        </>
    );
}

export default Todos;
