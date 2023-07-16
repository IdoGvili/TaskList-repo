import React, { useState, useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';
import data from './data.json';

import Header from './Header';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

async function fetchData(setToDoList) {
    await new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
    const response = await fetch(
        'https://raw.githubusercontent.com/IdoGvili/TaskList-repo/master/src/Data.json',
    );
    const fetchedData = await response.json();
    setToDoList(fetchedData);
}

function App() {
    const [toDoList, setToDoList] = useState([]);

    useEffect(() => {
        fetchData(setToDoList);
    }, []);

    const [listId, setListId] = useState(toDoList.length);

    const handleButton = (id) => {
        const mapped = toDoList.map((task) =>
            task.id === Number(id)
                ? { ...task, complete: !task.complete }
                : { ...task },
        );
        setToDoList(mapped);

        const filtered = mapped.filter((task) => !task.complete);

        setToDoList(filtered);
    };

    const addTask = (userInput) => {
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

    return (
        <div>
            {toDoList.length === 0 ? (
                <div>
                    <h1>Loading...</h1>
                    <ColorRing
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={[
                            '#e15b64',
                            '#f47e60',
                            '#f8b26a',
                            '#abbd81',
                            '#849b87',
                        ]}
                    />
                </div>
            ) : (
                <div className="App">
                    <Header />
                    <ToDoList toDoList={toDoList} handleButton={handleButton} />
                    <ToDoForm addTask={addTask} />
                </div>
            )}
        </div>
    );
}

export default App;
