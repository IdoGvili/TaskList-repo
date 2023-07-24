import React from 'react';
import { ColorRing } from 'react-loader-spinner';
import { Stack, Divider } from '@mui/material';
import ToDo from './ToDo';

export default function ToDoList({ toDoList, onRemoveTodo }) {
    return toDoList === null ? (
        <div>
            <Loading />
        </div>
    ) : (
        <div>
            {toDoList.map((toDo) => (
                <Stack
                    spacing={1}
                    divider={<Divider orientation="horizontal" flexItem />}
                    key={toDo.id}
                >
                    {toDo.show && (
                        <ToDo toDo={toDo} onRemoveTodo={onRemoveTodo} />
                    )}
                </Stack>
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
