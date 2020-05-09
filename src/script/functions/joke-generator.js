const axios = require("axios");
const jokeBtn = document.querySelector("#joke-btn");

const generateJoke = (apiData) => {
  axios
    .get(`${apiData.baseUrl}/food/jokes/random?apiKey=${apiData.apiKey}`)
    .then((response) => passInitialResponse(response.data))
    .catch((err) => console.log(err));
};

const passInitialResponse = (data) => {
  document.querySelector("#joke-text").innerText = data.text;
};

export default generateJoke;
