import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem, styled } from '@mui/material';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import AddIcon from '@mui/icons-material/Add';
import theme from './theme';
import ToDo from './ToDo';

function ToDoForm({ addTodo }) {
    const [task, setTask] = useState('');
    const [date, setDate] = useState(new Date());
    const [priority, setPriority] = useState(ToDo.priorities.LOW);

    const onTaskChange = (e) => {
        setTask(e.target.value);
    };
    const onDateChange = (newDate) => {
        setDate(newDate);
    };
    const onPriorityChange = (e) => {
        setPriority(e.target.value);
    };
    const resetStateOnSubmit = () => {
        setTask('');
        setDate(new Date());
        setPriority(ToDo.priorities.LOW);
    };

    const onSubmitTodo = (e) => {
        e.preventDefault();
        addTodo(task, date.toLocaleDateString(), priority);
        resetStateOnSubmit();
    };

    const PriorityMenuItem = styled(MenuItem)((props) => ({
        color: theme.palette.priority[props.color],
    }));

    return (
        <>
            <h3> New Task:</h3>

            <form onSubmit={onSubmitTodo}>
                <TextField
                    label="enter task..."
                    sx={{ bgcolor: theme.palette.form.field }}
                    value={task}
                    type="text"
                    variant="filled"
                    color="secondary"
                    onChange={onTaskChange}
                    placeholder="Enter task..."
                />
                <Button
                    variant="contained"
                    endIcon={<AddIcon />}
                    size="small"
                    type="submit"
                    color="secondary"
                >
                    Submit
                </Button>
                <br />
                <Select
                    sx={{ bgcolor: theme.palette.form.field }}
                    onChange={onPriorityChange}
                    label="priority"
                    id="priority"
                    value={priority}
                >
                    <PriorityMenuItem
                        color={ToDo.priorities.LOW}
                        value={ToDo.priorities.LOW}
                    >
                        Low
                    </PriorityMenuItem>
                    <PriorityMenuItem
                        value={ToDo.priorities.MEDIUM}
                        color={ToDo.priorities.MEDIUM}
                    >
                        Medium
                    </PriorityMenuItem>
                    <PriorityMenuItem
                        color={ToDo.priorities.HIGH}
                        value={ToDo.priorities.HIGH}
                    >
                        High
                    </PriorityMenuItem>
                </Select>
                <DatePicker selected={date} onChange={onDateChange} />
            </form>
        </>
    );
}

export default ToDoForm;
