const axios = require("axios");
const jokeBtn = document.querySelector("#joke-btn");

const generateJoke = (apiData) => {
  const { baseUrl, apiKey } = apiData;
  axios
    .get(`${baseUrl}/food/jokes/random?apiKey=${apiKey}`)
    .then((response) => passInitialResponse(response.data))
    .catch((err) => console.log(err));
};

const passInitialResponse = (data) => {
  document.querySelector("#joke-text").innerText = data.text;
};

export default generateJoke;
