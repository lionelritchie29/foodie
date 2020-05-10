const axios = require("axios");

const loaderContainer = document.querySelector("#trivia-text");

const generateTrivia = (apiData, loader) => {
  const { baseUrl, apiKey } = apiData;
  loaderContainer.innerHTML = loader;
  axios
    .get(`${baseUrl}/food/trivia/random?apiKey=${apiKey}`)
    .then((response) => passInitialResponse(response.data))
    .catch((err) => console.log(err));
};

const passInitialResponse = (data) => {
  document.querySelector("#trivia-text").innerText = data.text;
};

export default generateTrivia;
