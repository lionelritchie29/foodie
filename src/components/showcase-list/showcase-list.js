import "../showcase-item/showcase-item.js";

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
      const showcaseItem = document.createElement("showcase-item");
      showcaseItem.item = item;
      this.shadowDOM.appendChild(showcaseItem);
    });
  }
}

customElements.define("showcase-list", ShowcaseList);
