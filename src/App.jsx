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
    const [searchTerm, setSearchTerm] = useState('');
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
    const handleSearchTerm = useCallback((searchTermProp) => {
        setSearchTerm(searchTermProp);
    }, []);
    return (
        <>
            <ToDoList
                toDoList={toDoList}
                onRemoveTodo={onRemoveTodo}
                searchTerm={searchTerm}
            />
            <ToDoForm onAddTodo={onAddTodo} />
            <Search handleSearchTerm={handleSearchTerm} />
        </>
    );
}
function Search({ handleSearchTerm }) {
    const handleChange = (e) => {
        const searchTerm = e.target.value;
        handleSearchTerm(searchTerm);
    };

    return (
        <div>
            <h3>Search</h3>
            <input
                type="text"
                placeholder="Search Item..."
                onChange={handleChange}
            />
        </div>
    );
}

export default App;
