import React from 'react';
import { TextField } from '@mui/material';
import theme from './Theme';

function Search({ filterToDoList }) {
    const styles = { backgroundColor: theme.palette.form.field };
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
