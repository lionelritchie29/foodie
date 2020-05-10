import "../recipe-card/recipe-card.js";

class ShowcaseList extends HTMLElement {
  connectedCallback() {
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set items(items) {
    this._items = items;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = "";
    this._items.forEach((item) => {
      const recipeCard = document.createElement("recipe-card");
      recipeCard.item = item;
      this.shadowDOM.appendChild(recipeCard);
    });
  }
}

customElements.define("showcase-list", ShowcaseList);
