import React from "react";
import "./Cooking.css";

function Cooking({ match, location }) {
  console.log(location);

  if (window.performance) {
    if (performance.navigation.type === 1) {
      alert("This page is reloaded");
    } else {
      alert("This page is not reloaded");
    }
  }

  return (
    <div>
      <div className="image-container">
        <img className="dish-image" src={location.state.recipe.image} alt="" />

        <div className="data-container">
          <h1>{location.state.recipe.label}</h1>
          <h5>Source:123 {location.state.recipe.source}</h5>
          <h2>Calories present {location.state.recipe.calories}</h2>
          <a href={location.state.recipe.url} target="blank">
            <button>More Information</button>
          </a>
          <ul>
            {location.state.recipe.healthLabels.map((label, index) => (
              <li key={index}># {label}</li>
            ))}
            {location.state.recipe.dietLabels.map((label, index) => (
              <li key={index}># {label}</li>
            ))}
          </ul>
        </div>
      </div>

      <ol className="ingredient-container">
        {location.state.recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="main">
            <img src={ingredient.image} alt="" />
            <h2>Item Name: {ingredient.text}</h2>
            <h3>Weight: {ingredient.weight.toFixed(2)}gms</h3>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Cooking;
