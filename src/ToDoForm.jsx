import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem, styled } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import theme from './Theme';

import ToDo from './ToDo';

function ToDoForm({ onAddTodo }) {
    const [userInput, setUserInput] = useState({
        task: '',
        date: '1',
        priority: ToDo.priorities.LOW,
    });

    const handleChange = (e) => {
        setUserInput({ ...userInput, task: e.target.value });
    };
    const handleChangeDate = (e) => {
        setUserInput({ ...userInput, date: e.target.value });
    };
    const handleChangePriority = (e) => {
        setUserInput({ ...userInput, priority: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onAddTodo(userInput);
        setUserInput({ task: '', date: '1', priority: ToDo.priorities.LOW });
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
    const styles = { backgroundColor: theme.palette.form.field };
    return (
        <>
            <h3> New Task:</h3>

            <form onSubmit={handleSubmit}>
                <TextField
                    label="enter task..."
                    style={styles}
                    value={userInput.task}
                    type="text"
                    variant="filled"
                    color="secondary"
                    onChange={handleChange}
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
                    style={styles}
                    onChange={handleChangePriority}
                    label="priority"
                    id="priority"
                    value={userInput.priority}
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
                    style={styles}
                    onChange={handleChangeDate}
                    name="month"
                    id="month"
                    value={userInput.date}
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
