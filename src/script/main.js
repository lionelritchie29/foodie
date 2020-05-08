const axios = require("axios");
import "../components/showcase-list/showcase-list.js";

function main() {
  const baseUrl = "https://api.spoonacular.com";
  const apiKey = "8c45e5cc1bd3429e889d99bb19382990";
  const showcaseListElement = document.querySelector("showcase-list");

  // Sending GET request to API, result : array of show case recipes
  // to be used in showcase section
  (function () {
    axios
      .get(`${baseUrl}/recipes/random?apiKey=${apiKey}&number=8`)
      .then((response) => passInitialResponse(response.data.recipes))
      .catch((error) => console.log(error));
  })();

  // Function to call showcase-list component settter
  const passInitialResponse = (showcaseItems) => {
    showcaseListElement.showcaseItems = showcaseItems;
  };
}

export default main;
