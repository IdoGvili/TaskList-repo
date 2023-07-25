import React from 'react';

import { Stack, Button, styled } from '@mui/material';

const priorities = {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high',
};

const NewStack = styled(Stack)(({ theme, priority, isNew }) => ({
    backgroundColor: 'RGB(247, 202, 201)',
    borderStyle: 'solid',
    borderRadius: '25px',
    padding: '10px',
    width: '400px',
    height: '30px',
    margin: 'auto',
    fontWeight: 'bold',

    color: theme.palette.priority[priority],
    borderColor: isNew ? theme.palette.priority.new : '',
}));
const deleteButtonStyle = {
    paddingLeft: '12px',
};

function ToDo({ toDo, onRemoveTodo }) {
    const handleButtonPress = (e) => {
        e.preventDefault();
        onRemoveTodo(e.currentTarget.parentNode);
    };

    /*    className={clsx(styles.toDo, {
                [styles.newToDo]: !!toDo.new,
                [styles.low]: toDo.priority === priorities.LOW,
                [styles.medium]: toDo.priority === priorities.MEDIUM,
                [styles.high]: toDo.priority === priorities.HIGH,
            })} */

    return (
        <NewStack
            id={toDo.id}
            name="todo"
            value={toDo.id}
            priority={toDo.priority}
            isNew={toDo.new}
            direction="row"
            justifyContent="space-between"
        >
            {toDo.new && 'NEW-    '}
            {toDo.task}
            -BY {toDo.dueMonth}
            <Button
                onClick={handleButtonPress}
                variant="contained"
                size="small"
                type="button"
                sx={deleteButtonStyle}
            >
                delete
            </Button>
        </NewStack>
    );
}
ToDo.priorities = priorities;

export default ToDo;
