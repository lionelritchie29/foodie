const axios = require("axios");
const mealListElement = document.querySelector("meal-list");

const getMeal = (apiData) => {
  const { baseUrl, apiKey } = apiData;
  axios
    .get(`${baseUrl}/mealplanner/generate?apiKey=${apiKey}&timeFrame=day`)
    .then((response) => passInitialResponse(response.data))
    .catch((err) => console.log(err));
};

const passInitialResponse = (data) => {
  mealListElement.items = data.meals;
  showNutrients(data.nutrients);
};

const showNutrients = (nutrient) => {
  const { calories, protein, fat, carbohydrates } = nutrient;
  document.querySelector("#calories").innerText = calories;
  document.querySelector("#protein").innerText = protein;
  document.querySelector("#fat").innerText = fat;
  document.querySelector("#carbo").innerText = carbohydrates;
};

export default getMeal;
