import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem, styled } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import theme from './theme';
import ToDo from './ToDo';

const styles = { backgroundColor: theme.palette.form.field };

function ToDoForm({ addTodo }) {
    const [task, setTask] = useState('');
    const [date, setDate] = useState(1);
    const [priority, setPriority] = useState(ToDo.priorities.LOW);

    const onTaskChange = (e) => {
        setTask(e.target.value);
    };
    const onDateChange = (e) => {
        setDate(e.target.value);
    };
    const onPriorityChange = (e) => {
        setPriority(e.target.value);
    };

    const onSubmitTodo = (e) => {
        e.preventDefault();
        addTodo(task, date, priority);
        setTask('');
        setDate(1);
        setPriority(ToDo.priorities.LOW);
    };
    function priorityColor(props) {
        if (props === ToDo.priorities.LOW) return theme.palette.priority.low;
        if (props === ToDo.priorities.MEDIUM)
            return theme.palette.priority.medium;

        return theme.palette.priority.high;
    }
    const PriorityMenuItem = styled(MenuItem)((props) => ({
        color: priorityColor(props.color),
    }));

    return (
        <>
            <h3> New Task:</h3>

            <form onSubmit={onSubmitTodo}>
                <TextField
                    label="enter task..."
                    sx={styles}
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
                    sx={styles}
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
                <Select
                    sx={styles}
                    onChange={onDateChange}
                    name="month"
                    id="month"
                    value={date}
                >
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                    <MenuItem value="7">7</MenuItem>
                    <MenuItem value="8">8</MenuItem>
                    <MenuItem value="9">9</MenuItem>
                    <MenuItem value="10">10</MenuItem>
                    <MenuItem value="11">11</MenuItem>
                    <MenuItem value="12">12</MenuItem>
                </Select>
                /2023
            </form>
        </>
    );
}

export default ToDoForm;
