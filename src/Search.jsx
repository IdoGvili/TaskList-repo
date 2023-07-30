import React from 'react';
import { TextField } from '@mui/material';
import { PropTypes } from 'prop-types';
import theme from './theme';

function Search({ filterToDoList }) {
    return (
        <div>
            <h3>Search</h3>
            <TextField
                sx={{ bgcolor: theme.palette.form.field }}
                type="text"
                placeholder="Search Item..."
                onChange={filterToDoList}
            />
        </div>
    );
}
Search.propTypes = {
    filterToDoList: PropTypes.func,
};
Search.defaultProps = {
    filterToDoList: () => {},
};

export default Search;
