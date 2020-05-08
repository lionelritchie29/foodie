import html from "./template.html";
import scss from "./style.scss";
import templateFactory from "../../utils/templateFactory.js";

const template = templateFactory(html, scss);

class ShowcaseItem extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  set showcaseItem(item) {
    this._showcaseItem = item;
    this.render();
  }

  render() {}
}

customElements.define("showcase-item", ShowcaseItem);
