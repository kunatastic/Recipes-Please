import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

function Search({ setSearch }) {
  const [dish, setDish] = useState("");

  const Valid = (event) => {
    // event.preventDefault();
    //to some random shit
    if (dish !== "") {
      setSearch(dish);
    }
  };

  return (
    <>
      <form>
        <input
          type="text"
          className="search-food"
          placeholder="Search Food..."
          spellCheck="false"
          value={dish}
          onChange={(event) => setDish(event.target.value)}
        />
        <Link to={dish} onClick={() => Valid()}>
          <button>
            <SearchIcon />
          </button>
        </Link>
      </form>
    </>
  );
}

export default Search;
