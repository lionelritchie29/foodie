import htmlFront from "./template-front.html";
import htmlBack from "./template-back.html";
import scss from "./style.scss";
import templateFactory from "../../utils/templateFactory.js";
import truncate from "../../utils/truncateString.js";

const templateFront = templateFactory(htmlFront, scss);
const templateBack = templateFactory(htmlBack, scss);
const baseRecipeImageUrl = "https://spoonacular.com/recipeImages";
const baseSize = "240x150";

class RecipeCard extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
    this.shadowDOM.appendChild(templateFront.content.cloneNode(true));
  }

  connectedCallback() {
    const moreBtn = this.shadowDOM.querySelector("#more-btn");
    moreBtn.onclick = () => this.renderBackside();
  }

  set item(item) {
    this._item = item;
    this.render("More");
  }

  renderBackside() {
    this.shadowDOM.innerHTML = "";
    this.shadowDOM.appendChild(templateBack.content.cloneNode(true));

    const {
      title,
      glutenFree,
      dairyFree,
      vegetarian,
      vegan,
      pricePerServing,
    } = this._item;

    const titleElement = this.shadowDOM.querySelector("h5");
    const vegeElement = this.shadowDOM.querySelector("#vege");
    const glutenFreeElement = this.shadowDOM.querySelector("#glutten-free");
    const dairyFreeElement = this.shadowDOM.querySelector("#dairy-free");
    const priceElement = this.shadowDOM.querySelector("#price");
    const veganElement = this.shadowDOM.querySelector("#vegan");

    titleElement.innerText = title;
    vegeElement.innerText = vegetarian;
    veganElement.innerText = vegan;
    glutenFreeElement.innerText = glutenFree;
    dairyFreeElement.innerText = dairyFree;
    priceElement.innerText = `$${pricePerServing}`;

    // If it is already 5 sec, render the front card again
    setTimeout(() => {
      this.render("Cool!");
    }, 5000);
  }

  render(btnText) {
    this.shadowDOM.innerHTML = "";
    this.shadowDOM.appendChild(templateFront.content.cloneNode(true));

    const titleElement = this.shadowDOM.querySelector("h5");
    const minuteTextElement = this.shadowDOM.querySelector("#ready-in-minute");
    const servingTextElement = this.shadowDOM.querySelector("#serving");
    const imgElement = this.shadowDOM.querySelector("img");
    const btnElement = this.shadowDOM.querySelector("button");
    const { title, readyInMinutes, servings, id } = this._item;

    titleElement.innerText = truncate(title);
    minuteTextElement.innerText = readyInMinutes;
    servingTextElement.innerText = servings;
    imgElement.src = `${baseRecipeImageUrl}/${id}-${baseSize}.jpg`;
    btnElement.innerText = btnText;
  }
}

customElements.define("recipe-card", RecipeCard);
