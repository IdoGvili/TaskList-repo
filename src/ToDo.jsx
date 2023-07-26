import React from 'react';

import { Stack, Button, styled } from '@mui/material';

const priorities = {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high',
};

const deleteButtonStyle = {
    paddingLeft: '12px',
};

function ToDo({ toDo, onRemoveTodo }) {
    const onDeleteHandle = (e) => {
        e.preventDefault();
        onRemoveTodo(e.currentTarget.parentNode);
    };

    return (
        <StackTest toDo={toDo}>
            {toDo.new && 'NEW-    '}
            {toDo.task}
            -BY {toDo.dueMonth}
            <Button
                onClick={onDeleteHandle}
                variant="contained"
                size="small"
                type="button"
                sx={deleteButtonStyle}
            >
                delete
            </Button>
        </StackTest>
    );
}
function RowStack(props) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Stack {...props} direction="row" justifyContent="space-between" />;
}
function StackTest({ toDo, children }) {
    const NewStack = styled(RowStack)(({ theme, priority, isNew }) => ({
        backgroundColor: '#F7CAC9',
        borderStyle: 'solid',
        borderRadius: '25px',
        padding: '10px',
        width: '400px',
        height: '30px',
        margin: 'auto',
        fontWeight: '700',
        color: theme.palette.priority[priority],
        borderColor: isNew ? theme.palette.priority.new : '',
    }));
    return (
        <NewStack
            id={toDo.id}
            name="todo"
            value={toDo.id}
            priority={toDo.priority}
            isNew={toDo.new}
        >
            {children}
        </NewStack>
    );
}

ToDo.priorities = priorities;

export default ToDo;
