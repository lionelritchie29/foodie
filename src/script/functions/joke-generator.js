const axios = require("axios");
const loaderContainer = document.querySelector("#joke-text");

const generateJoke = (apiData, loader) => {
  const { baseUrl, apiKey } = apiData;

  loaderContainer.innerHTML = loader;
  axios
    .get(`${baseUrl}/food/jokes/random?apiKey=${apiKey}`)
    .then((response) => passInitialResponse(response.data))
    .catch((err) => console.log(err));
};

const passInitialResponse = (data) => {
  document.querySelector("#joke-text").innerText = data.text;
};

export default generateJoke;
