import React, { useState } from "react";

function Search({ plantsToDisplay, search, handleSetSearch }) {

  const handleOnChange = (e) => {
    handleSetSearch(e.target.value) //asynchronous
    plantsToDisplay(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        value={search}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleOnChange}
      />
    </div>
  );
}

export default Search;
