import "../recipe-card/recipe-card.js";

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
    console.log(this._items);
    this._items.forEach((item) => {
      console.log(item);
      const recipeCard = document.createElement("recipe-card");
      recipeCard.item = item;
      this.shadowDOM.appendChild(recipeCard);
    });
  }
}

customElements.define("search-recipe-list", SearchRecipeList);
