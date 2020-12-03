import React, { useEffect, useState } from "react";
import Recipes from "./Recipes";
import "./Items.css";
import Spinner from "react-bootstrap/Spinner";

import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

function Items({ search }) {
  const API_ID = "9bf58971";
  const API_KEY = "a0495fa4553bf4dbc82dba7364ac1dae";

  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(0);
  const page2 = page + 16;
  const url = `https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}&from=${page}&to=${page2}`;

  const getRecipe = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getRecipe(), [page, search]);

  if (recipes.length === 0) {
    return <h1>Hmmm! Just a second. Seems I am busy right now ;(</h1>;
  }
  return (
    <>
      <div className="page-changer">
        <button onClick={() => setPage((prev) => prev - 16)}>
          <KeyboardArrowLeftIcon />
        </button>
        <div className="pg-no">Page: {page / 16 + 1}</div>
        <button onClick={() => setPage((prev) => prev + 16)}>
          <KeyboardArrowRightIcon />
        </button>
        <Spinner />
      </div>
      <Recipes info={recipes} search={search} />
    </>
  );
}

export default Items;
