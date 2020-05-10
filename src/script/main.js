// Components
import "../components/showcase-list/showcase-list.js";
import "../components/search-recipe-list/search-recipe-list.js";
import "../components/meal-list/meal-list.js";

import getRandomRecipe from "./functions/random-recipe.js";
import getSearchedRecipe from "./functions/search-recipe.js";
import getMeal from "./functions/meal-generator.js";
import generateJoke from "./functions/joke-generator.js";
import generateTrivia from "./functions/trivia-generator.js";
import subscribe from "./functions/subscribe.js";

function main() {
  const searchRecipeBtn = document.querySelector("#search-recipe-btn");
  const generateMealBtn = document.querySelector("#meal-btn");
  const triviaBtn = document.querySelector("#trivia-btn");
  const jokeBtn = document.querySelector("#joke-btn");
  const subsBtn = document.querySelector("#subs-btn");

  // loader animation
  const loader = `
    <div class="loading">
      <img src="https://s6.gifyu.com/images/loadingdb6755c0bbe004fe.gif" width="100" alt="" />
    </div>
  `;

  // small loader animation
  const loaderSmall = `
    <div class="loading-small">
      <img src="https://s6.gifyu.com/images/loading-s.gif" alt="" />
    </div>
  `;

  const apiData = {
    apiKey: "8c45e5cc1bd3429e889d99bb19382990",
    baseUrl: "https://api.spoonacular.com",
  };

  // Init random recipe, meal list, joke and trivia
  generateJoke(apiData, loaderSmall);
  generateTrivia(apiData, loaderSmall);
  getMeal(apiData, loader);
  getRandomRecipe(apiData, loader);

  // If user searched for specific recipe
  searchRecipeBtn.addEventListener("click", () =>
    getSearchedRecipe(apiData, loader)
  );

  // If user click generate meal button
  generateMealBtn.addEventListener("click", () => getMeal(apiData, loader));

  // If user click button on joke / trivia
  triviaBtn.addEventListener("click", () =>
    generateTrivia(apiData, loaderSmall)
  );
  jokeBtn.addEventListener("click", () => generateJoke(apiData, loaderSmall));

  // If user click subscribe button
  subsBtn.addEventListener("click", () => subscribe());
}

export default main;
