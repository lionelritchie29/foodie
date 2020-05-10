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

  get recipeItem() {
    // return this._item;
    return 2;
  }

  render() {
    const { title, readyInMinutes, servings, id } = this._item;
    const titleSliced = truncate(title);
    this.shadowDOM.querySelector("h5").innerText = titleSliced;
    this.shadowDOM.querySelector("#ready-in-minute").innerText = readyInMinutes;
    this.shadowDOM.querySelector("#serving").innerText = servings;
    this.shadowDOM.querySelector(
      "img"
    ).src = `${baseRecipeImageUrl}/${id}-${baseSize}.jpg`;
  }
}

customElements.define("recipe-card", RecipeCard);
