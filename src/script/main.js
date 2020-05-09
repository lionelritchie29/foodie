import "../components/showcase-list/showcase-list.js";
import "../components/search-recipe-list/search-recipe-list.js";
import "../components/meal-list/meal-list.js";
import getRandomRecipe from "./functions/random-recipe.js";
import axios from "axios";
import getSearchedRecipe from "./functions/search-recipe.js";

function main() {
  const searchRecipeBtn = document.querySelector("#search-recipe-btn");

  const apiData = {
    apiKey: "8c45e5cc1bd3429e889d99bb19382990",
    baseUrl: "https://api.spoonacular.com",
  };

  // Get random recipe to show at showcase
  getRandomRecipe(apiData);

  // If user searched for specific recipe
  searchRecipeBtn.addEventListener("click", () => getSearchedRecipe(apiData));

  const arr = [1, 2, 3];
  document.querySelector("meal-list").items = arr;
}

export default main;
