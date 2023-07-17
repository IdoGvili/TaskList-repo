import React, { useState, useCallback, useEffect } from 'react';
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
    const [toDoList, setToDoList] = useState([]);

    const [listId, setListId] = useState(toDoList.length);

    const onRemoveTodo = (id) => {
        const mapped = toDoList.map((task) =>
            task.id === Number(id)
                ? { ...task, complete: !task.complete }
                : { ...task },
        );
        setToDoList(mapped);

        const filtered = mapped.filter((task) => !task.complete);

        setToDoList(filtered);
    };

    const onAddTodo = (userInput) => {
        const before = toDoList.filter(
            (task) => task.dueMonth < userInput.date,
        );
        const after = toDoList.filter(
            (task) => task.dueMonth >= userInput.date,
        );

        const copy = [
            ...before,
            {
                id: listId + 1,
                task: userInput.task,
                complete: false,
                dueMonth: userInput.date,
                new: true,
            },
            ...after,
        ];
        setListId((n) => n + 1);
        setToDoList(copy);
    };
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

    return (
        <>
            <ToDoList
                toDoList={toDoList}
                setToDoList={setToDoList}
                onRemoveTodo={onRemoveTodo}
            />
            <ToDoForm onAddTodo={onAddTodo} />
        </>
    );
}

export default App;
