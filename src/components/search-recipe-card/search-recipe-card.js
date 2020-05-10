import html from "./template.html";
import scss from "./style.scss";
import templateFactory from "../../utils/templateFactory.js";
import truncate from "../../utils/truncateString.js";

const template = templateFactory(html, scss);
const baseRecipeImageUrl = "https://spoonacular.com/recipeImages";
const baseSize = "240x150";

class RecipeCard extends HTMLElement {
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
    const { title, readyInMinutes, servings, id } = this._item;

    const titleElement = this.shadowDOM.querySelector("h5");
    const minuteTextElement = this.shadowDOM.querySelector("#ready-in-minute");
    const servingTextElement = this.shadowDOM.querySelector("#serving");
    const imgElement = this.shadowDOM.querySelector("img");

    titleElement.innerText = truncate(title);
    minuteTextElement.innerText = readyInMinutes;
    servingTextElement.innerText = servings;
    imgElement.src = `${baseRecipeImageUrl}/${id}-${baseSize}.jpg`;
  }
}

customElements.define("search-recipe-card", RecipeCard);
