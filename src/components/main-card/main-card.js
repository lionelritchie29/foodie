import html from "./template.html";
import scss from "./style.scss";
import templateFactory from "../../utils/templateFactory.js";
import recipeImg from "../../assets/images/recipe.svg";
import menuImg from "../../assets/images/menu.svg";
import groceryImg from "../../assets/images/grocery.svg";
import mealImg from "../../assets/images/meal.svg";

const template = templateFactory(html, scss);
const baseImageUrl = "../../assets/images";

class MainCard extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.name = this.getAttribute("name") || null;
    this.imgName = this.getAttribute("src") || null;
    this.render();
  }

  render() {
    this.shadowRoot.querySelector("span").innerText = this.name;
    // this.shadowRoot.querySelector("img").src = ?
  }
}

customElements.define("main-card", MainCard);
