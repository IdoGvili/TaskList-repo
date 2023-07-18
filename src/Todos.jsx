import React, { useState, useCallback, useEffect } from 'react';
import { v4 } from 'uuid';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import Search from './Search';

function Todos() {
    const [toDoList, setToDoList] = useState(null);
    const [toDoListfliteredOut, setToDoListfliteredOut] = useState([]);
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

    const onAddTodo = ({ task: newTask, date }) => {
        const before = toDoList.filter((toDo) => toDo.dueMonth < date);
        const after = toDoList.filter((toDo) => toDo.dueMonth >= date);

        const copy = [
            ...before,
            {
                id: v4(),
                task: newTask,
                complete: false,
                dueMonth: date,
                new: true,
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
        const newData = fetchedData.map((toDo) => ({ ...toDo, id: v4() }));
        setToDoList(newData);
    }, []);
    useEffect(() => {
        fetchData();
    }, [fetchData]);
    const filterToDoList = useCallback(
        (searchTermProp) => {
            const combinedList = [...toDoList, ...toDoListfliteredOut];
            const filteredIn = combinedList.filter((toDo) =>
                toDo.task.includes(searchTermProp),
            );
            const filteredOut = combinedList.filter(
                (toDo) => !toDo.task.includes(searchTermProp),
            );
            setToDoList(filteredIn);
            setToDoListfliteredOut(filteredOut);
        },
        [toDoList, toDoListfliteredOut],
    );
    return (
        <>
            <ToDoList toDoList={toDoList} onRemoveTodo={onRemoveTodo} />
            <ToDoForm onAddTodo={onAddTodo} />
            <Search filterToDoList={filterToDoList} />
        </>
    );
}

export default Todos;
