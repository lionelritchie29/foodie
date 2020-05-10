const axios = require("axios");

const showcaseListElement = document.querySelector("showcase-list");

const getRandomRecipe = (apiData) => {
  const { baseUrl, apiKey } = apiData;
  axios
    .get(`${baseUrl}/recipes/random?apiKey=${apiKey}&number=8`)
    .then((response) => passInitialResponse(response.data.recipes))
    .catch((error) => console.log(error));
};

const passInitialResponse = (showcaseItems) => {
  showcaseListElement.items = showcaseItems;
};

export default getRandomRecipe;
