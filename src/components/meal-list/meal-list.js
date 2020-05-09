import "../meal-card/meal-card.js";

class MealList extends HTMLElement {
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
      const mealCard = document.createElement("meal-card");
      // mealCard.item = item;
      this.shadowDOM.appendChild(mealCard);
    });
  }
}

customElements.define("meal-list", MealList);
