import html from "./template.html";
import scss from "./style.scss";
import templateFactory from "../../utils/templateFactory.js";
import truncateString from "../../utils/truncateString.js";

const template = templateFactory(html, scss);
const baseRecipeImageUrl = "https://spoonacular.com/recipeImages";
const baseSize = "240x150";

class MealCard extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
    this.shadowDOM.appendChild(template.content.cloneNode(true));
  }

  set item(item) {
    this._item = item;
    this.render();
  }

  render() {
    const { title, imageType, readyInMinutes, servings, id } = this._item;
    const titleSliced = truncateString(title);
    this.shadowDOM.querySelector("h4").innerText = titleSliced;
    this.shadowDOM.querySelector(
      "img"
    ).src = `${baseRecipeImageUrl}/${id}-${baseSize}.${imageType}`;
    this.shadowDOM.querySelector("#ready-in-minute").innerText = readyInMinutes;
    this.shadowDOM.querySelector("#serving").innerText = servings;
  }
}

customElements.define("meal-card", MealCard);
