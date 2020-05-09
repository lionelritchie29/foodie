const axios = require("axios");

const showcaseListElement = document.querySelector("showcase-list");

const getRandomRecipe = (apiData) => {
  axios
    .get(`${apiData.baseUrl}/recipes/random?apiKey=${apiData.apiKey}&number=8`)
    .then((response) => passInitialResponse(response.data.recipes))
    .catch((error) => console.log(error));
};

const passInitialResponse = (showcaseItems) => {
  showcaseListElement.items = showcaseItems;
};

export default getRandomRecipe;
