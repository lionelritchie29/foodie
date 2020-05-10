// Components
import "../components/showcase-list/showcase-list.js";
import "../components/search-recipe-list/search-recipe-list.js";
import "../components/meal-list/meal-list.js";

import getRandomRecipe from "./functions/random-recipe.js";
import getSearchedRecipe from "./functions/search-recipe.js";
import getMeal from "./functions/meal-generator.js";
import generateJoke from "./functions/joke-generator.js";
import generateTrivia from "./functions/trivia-generator.js";

function main() {
  const searchRecipeBtn = document.querySelector("#search-recipe-btn");
  const generateMealBtn = document.querySelector("#meal-btn");
  const triviaBtn = document.querySelector("#trivia-btn");
  const jokeBtn = document.querySelector("#joke-btn");

  const apiData = {
    apiKey: "8c45e5cc1bd3429e889d99bb19382990",
    baseUrl: "https://api.spoonacular.com",
  };

  // Init random recipe, meal list, joke and trivia
  // generateJoke(apiData);
  // generateTrivia(apiData);
  // getMeal(apiData);
  // getRandomRecipe(apiData);

  // If user searched for specific recipe
  searchRecipeBtn.addEventListener("click", () => getSearchedRecipe(apiData));

  // If user click generate meal button
  generateMealBtn.addEventListener("click", () => getMeal(apiData));

  // If user click button on joke / trivia
  triviaBtn.addEventListener("click", () => generateTrivia(apiData));
  jokeBtn.addEventListener("click", () => generateJoke(apiData));

  // console.log(document.querySelector("showcase-list").recipeData);
}

export default main;
