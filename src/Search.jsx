import React from 'react';

function Search({ filterToDoList }) {
    return (
        <div>
            <h3>Search</h3>
            <input
                type="text"
                placeholder="Search Item..."
                onChange={filterToDoList}
            />
        </div>
    );
}

export default Search;
