import React, { useState, useCallback, useEffect } from 'react';
import { v4 } from 'uuid';
import Header from './Header';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
    return (
        <div>
            <div className="App">
                <Header />
                <Todos />
            </div>
        </div>
    );
}
function Todos() {
    const [toDoList, setToDoList] = useState(null);

    const onRemoveTodo = ({ id }) => {
        const mapped = toDoList.map((task) =>
            task.id === id
                ? { ...task, complete: !task.complete }
                : { ...task },
        );
        setToDoList(mapped);

        const filtered = mapped.filter((task) => !task.complete);

        setToDoList(filtered);
    };

    const onAddTodo = ({ task, date }) => {
        const before = toDoList.filter((thisTask) => thisTask.dueMonth < date);
        const after = toDoList.filter((thisTask) => thisTask.dueMonth >= date);

        const copy = [
            ...before,
            {
                id: v4(),
                task: task,
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
        const newData = fetchedData.map((task) => ({ ...task, id: v4() }));
        setToDoList(newData);
    }, [setToDoList]);
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
            <ToDoList toDoList={toDoList} onRemoveTodo={onRemoveTodo} />
            <ToDoForm onAddTodo={onAddTodo} />
        </>
    );
}

export default App;
