import React, { useState } from "react";
import "./Search.css";

const Search = (props) => {
  const [queryValue, setQueryValue] = useState("");
  const onChangeHandler = (e) => {
    setQueryValue(e.target.value);
  };
  return (
    <React.Fragment>
      <div className="div-search">
        <h2>Search for a movie</h2>        
        <input
          className="input-search"
          type="text"
          value={queryValue}
          onChange={onChangeHandler}   
          onKeyPress={(e)=> e.key==='Enter' ? props.onSearch(queryValue):null }       
        />
        <button className="btn-search" onClick={() => props.onSearch(queryValue)}>Search</button>
      </div>
    </React.Fragment>
  );
};

export default Search;