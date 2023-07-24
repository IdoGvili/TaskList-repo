import React from 'react';

import { Stack, Button, styled } from '@mui/material';

import theme from './theme';

const priorities = {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high',
};

const NewBox = styled(Stack)((props) => ({
    backgroundColor: 'RGB(247, 202, 201)',
    borderStyle: 'solid',
    borderRadius: '25px',
    padding: '10px',
    width: '400px',
    height: '30px',
    margin: 'auto',
    fontWeight: 'bold',

    direction: props.direction,
    justifyContent: props.justifyContent,
    color: theme.palette.priority[props.priority],
    borderColor: props.isNew && theme.palette.priority.new,
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
        <NewBox
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
            -BY {toDo.dueMonth}/2023
            <Button
                onClick={handleButtonPress}
                variant="contained"
                size="small"
                type="button"
                sx={deleteButtonStyle}
            >
                delete
            </Button>
        </NewBox>
    );
}
ToDo.priorities = priorities;

export default ToDo;
