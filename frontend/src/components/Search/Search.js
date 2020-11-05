import React from "react";
import "./Search.css";

function Search() {
  return (
    <ul className="search-container">
      <li class="search-foot">
        <input
          type="text"
          class="searchTerm"
          placeholder="Buscar algo..."
        ></input>
        <button type="submit" class="searchButton">
          <i class="fa fa-search"></i>
        </button>
      </li>
    </ul>
  );
}

export default Search;
