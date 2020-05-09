const axios = require("axios");
const mealListElement = document.querySelector("meal-list");

const getMeal = (apiData) => {
  axios
    .get(
      `${apiData.baseUrl}/mealplanner/generate?apiKey=${apiData.apiKey}&timeFrame=day`
    )
    .then((response) => passInitialResponse(response.data))
    .catch((err) => console.log(err));
};

const passInitialResponse = (data) => {
  mealListElement.items = data.meals;
  showNutrients(data.nutrients);
};

const showNutrients = (nutrient) => {
  document.querySelector("#calories").innerText = nutrient.calories;
  document.querySelector("#protein").innerText = nutrient.protein;
  document.querySelector("#fat").innerText = nutrient.fat;
  document.querySelector("#carbo").innerText = nutrient.carbohydrates;
};

export default getMeal;
