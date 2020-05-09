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
    const titleSliced = truncateString(this._item.title);
    this.shadowDOM.querySelector("h4").innerText = titleSliced;
    this.shadowDOM.querySelector(
      "img"
    ).src = `${baseRecipeImageUrl}/${this._item.id}-${baseSize}.${this._item.imageType}`;
    this.shadowDOM.querySelector(
      "#ready-in-minute"
    ).innerText = this._item.readyInMinutes;
    this.shadowDOM.querySelector("#serving").innerText = this._item.servings;
  }
}

customElements.define("meal-card", MealCard);
