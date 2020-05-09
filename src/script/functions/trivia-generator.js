const axios = require("axios");
const triviaBtn = document.querySelector("#trivia-btn");

const generateTrivia = (apiData) => {
  axios
    .get(`${apiData.baseUrl}/food/trivia/random?apiKey=${apiData.apiKey}`)
    .then((response) => passInitialResponse(response.data))
    .catch((err) => console.log(err));
};

const passInitialResponse = (data) => {
  document.querySelector("#trivia-text").innerText = data.text;
};

export default generateTrivia;
