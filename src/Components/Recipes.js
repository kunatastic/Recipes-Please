import React from "react";
import "./Recipes.css";
import { Link } from "react-router-dom";
function Recipes({ info, search }) {
  return (
    <section>
      {info.map((item, index) => {
        return (
          <Link
            to={{
              pathname: `/${search}/${item.recipe.label}`,
              state: item,
            }}
          >
            <main key={index}>
              <img src={item.recipe.image} alt={item.recipe.label} />
              <h2>{item.recipe.label}</h2>
            </main>
          </Link>
        );
      })}
    </section>
  );
}

export default Recipes;
