const axios = require("axios");

const showcaseListElement = document.querySelector("showcase-list");
const loaderContainer = document.querySelector("#showcase-loader");

const getRandomRecipe = (apiData, loader) => {
  const { baseUrl, apiKey } = apiData;
  loaderContainer.innerHTML = loader;
  axios
    .get(`${baseUrl}/recipes/random?apiKey=${apiKey}&number=8`)
    .then((response) => passInitialResponse(response.data.recipes))
    .catch((error) => console.log(error));
};

const passInitialResponse = (showcaseItems) => {
  showcaseListElement.items = showcaseItems;
  loaderContainer.innerHTML = "";
};

export default getRandomRecipe;
