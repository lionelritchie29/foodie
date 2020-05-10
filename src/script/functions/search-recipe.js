import axios from "axios";
const searchedListElement = document.querySelector("search-recipe-list");
const searchQueryElement = document.querySelector("#search-query");
const searchFormElement = document.querySelector("#search-form");
const loaderContainer = document.querySelector("#recipe-loader");
const getSearchedRecipe = (apiData, loader) => {
  const { baseUrl, apiKey } = apiData;
  const query = document.querySelector("#search-form").value;
  if (query === "") return;

  loaderContainer.innerHTML = loader;
  axios
    .get(`${baseUrl}/recipes/search?apiKey=${apiKey}&query=${query}&number=4`)
    .then((response) => passInitialResponse(response.data.results, query))
    .catch((error) => console.log(error));
};

const passInitialResponse = (searchedRecipes, query) => {
  searchedListElement.items = searchedRecipes;
  loaderContainer.innerHTML = "";
  updateForm(query);
};

const updateForm = (query) => {
  searchQueryElement.innerHTML = `You searched for : <strong>${query}<strong>`;
  searchFormElement.value = "";
};

export default getSearchedRecipe;
