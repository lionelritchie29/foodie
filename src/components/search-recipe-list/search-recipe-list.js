import "../search-recipe-card/search-recipe-card.js";

class SearchRecipeList extends HTMLElement {
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
      const searchRecipeCard = document.createElement("search-recipe-card");
      searchRecipeCard.item = item;
      this.shadowDOM.appendChild(searchRecipeCard);
    });
  }
}

customElements.define("search-recipe-list", SearchRecipeList);
