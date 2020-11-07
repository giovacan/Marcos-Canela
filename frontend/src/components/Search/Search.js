import React from "react";
import "./Search.css";

function Search() {
  return (
    <ul className="search-container">
      <li className="search-foot">
        <input
          type="text"
          className="searchTerm"
          placeholder="Buscar algo..."
        ></input>
        <button type="submit" className="searchButton">
          <i className="fa fa-search"></i>
        </button>
      </li>
    </ul>
  );
}

export default Search;
