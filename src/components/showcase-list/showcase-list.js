import html from "./template.html";
import scss from "./style.scss";
import templateFactory from "../../utils/templateFactory.js";
import "../showcase-item/showcase-item.js";

const template = templateFactory(html, scss);

class ShowcaseList extends HTMLElement {
  connectedCallback() {
    this.shadowDOM = this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
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
