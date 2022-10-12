import React from "react";
import "./Searchbox.scss";

function SearchBox({ searchfield, searchChange }) {
  return (
    <div>
      <input onChange={searchChange} />
    </div>
  );
}

export default SearchBox;
