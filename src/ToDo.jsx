import React from 'react';

import { Stack, Button, styled } from '@mui/material';

import theme from './Theme';

const priorities = {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high',
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
    function priorityColor(props) {
        if (props === priorities.LOW) return theme.palette.priority.low;
        if (props === priorities.MEDIUM) return theme.palette.priority.medium;

        return theme.palette.priority.high;
    }
    const NewBox = styled(Stack)((props) => ({
        backgroundColor: 'RGB(247, 202, 201)',
        borderStyle: 'solid',
        borderRadius: '25px',
        padding: '10px',
        width: '400px',
        height: '30px',
        margin: 'auto',
        fontWeight: 'bold',
        color: priorityColor(props.priority),
        borderColor: props.isNew && theme.palette.priority.new,
    }));

    return (
        <NewBox
            id={toDo.id}
            key={toDo.id + toDo.task}
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
            >
                {' '}
                delete
            </Button>
        </NewBox>
    );
}
ToDo.priorities = priorities;

export default ToDo;
