const axios = require("axios");

const generateTrivia = (apiData) => {
  const { baseUrl, apiKey } = apiData;
  axios
    .get(`${baseUrl}/food/trivia/random?apiKey=${apiKey}`)
    .then((response) => passInitialResponse(response.data))
    .catch((err) => console.log(err));
};

const passInitialResponse = (data) => {
  document.querySelector("#trivia-text").innerText = data.text;
};

export default generateTrivia;
