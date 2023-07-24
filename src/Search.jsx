import React from 'react';
import { TextField } from '@mui/material';
import theme from './theme';

const styles = { backgroundColor: theme.palette.form.field };
function Search({ filterToDoList }) {
    return (
        <div>
            <h3>Search</h3>
            <TextField
                style={styles}
                type="text"
                placeholder="Search Item..."
                onChange={filterToDoList}
            />
        </div>
    );
}

export default Search;
