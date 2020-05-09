import "../recipe-card/recipe-card.js";

class ShowcaseList extends HTMLElement {
  connectedCallback() {
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set items(items) {
    this._items = items;
    this.render();
  }

  get recipeData() {
    return this.data;
  }

  render() {
    this.shadowDOM.innerHTML = "";
    const data = [];
    this._items.forEach((item) => {
      const recipeCard = document.createElement("recipe-card");
      recipeCard.item = item;
      data.push(item.id);
      this.shadowDOM.appendChild(recipeCard);
    });
    console.log(data);
  }
}

customElements.define("showcase-list", ShowcaseList);
