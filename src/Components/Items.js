import React, { useEffect, useState } from "react";
import Recipes from "./Recipes";
import "./Items.css";

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
    return <h1>Sorry! No Recipes found ;(</h1>;
  }
  return (
    <>
      <div className="page-changer">
        <button onClick={() => setPage((prev) => prev - 16)}>Previous</button>
        <div className="pg-no">Page: {page / 16 + 1}</div>
        <button onClick={() => setPage((prev) => prev + 16)}>Next</button>
      </div>

      <Recipes info={recipes} search={search} />
    </>
  );
}

export default Items;
