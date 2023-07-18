import React from 'react';

function Search({ filterToDoList }) {
    const onSearchTermChange = (e) => {
        const searchTerm = e.target.value;
        filterToDoList(searchTerm);
    };

    return (
        <div>
            <h3>Search</h3>
            <input
                type="text"
                placeholder="Search Item..."
                onChange={onSearchTermChange}
            />
        </div>
    );
}

export default Search;
