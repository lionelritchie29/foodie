import html from "./template.html";
import scss from "./style.scss";
import templateFactory from "../../utils/templateFactory.js";
import truncate from "../../utils/truncateString.js";

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
    const {
      title,
      imageType,
      readyInMinutes,
      servings,
      id,
      sourceUrl,
    } = this._item;

    const titleElement = this.shadowDOM.querySelector("h4");
    const imgElement = this.shadowDOM.querySelector("img");
    const minuteTextElement = this.shadowDOM.querySelector("#ready-in-minute");
    const servingTextElement = this.shadowDOM.querySelector("#serving");
    const detailElement = this.shadowDOM.querySelector("#detail");

    titleElement.innerText = truncate(title);
    imgElement.src = `${baseRecipeImageUrl}/${id}-${baseSize}.${imageType}`;
    minuteTextElement.innerText = readyInMinutes;
    servingTextElement.innerText = servings;
    detailElement.href = sourceUrl;
  }
}

customElements.define("meal-card", MealCard);
