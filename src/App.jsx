import React, { useState } from 'react';
import Data from './Data.json';

import Header from './Header';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
    const [toDoList, setToDoList] = useState(Data);
    const [listId, setListId] = useState(toDoList.length);

    const handleButton = (id) => {
        const mapped = toDoList.map((task) => task.id === Number(id)
            ? { ...task, complete: !task.complete }
            : { ...task });
        setToDoList(mapped);

        const filtered = mapped.filter((task) => !task.complete);

        setToDoList(filtered);
    };

    const addTask = (userInput) => {
        const before = toDoList.filter((task) => task.dueMonth < userInput.date);
        const after = toDoList.filter((task) => task.dueMonth >= userInput.date);

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

    return (
        <div className="App">
            <Header />
            <ToDoList toDoList={toDoList} handleButton={handleButton} />
            <ToDoForm addTask={addTask} />
        </div>
    );
}

export default App;
