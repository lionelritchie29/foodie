import axios from "axios";
const searchedListElement = document.querySelector("search-recipe-list");

const getSearchedRecipe = (apiData) => {
  const searchForm = document.querySelector("#search-form");
  const query = searchForm.value;
  console.log(query);
  axios
    .get(
      `${apiData.baseUrl}/recipes/search?apiKey=${apiData.apiKey}&query=${query}&number=4`
    )
    .then((response) => passInitialResponse(response.data.results))
    .catch((error) => console.log(error));
};

const passInitialResponse = (searchedRecipes) => {
  searchedListElement.items = searchedRecipes;
};

export default getSearchedRecipe;
