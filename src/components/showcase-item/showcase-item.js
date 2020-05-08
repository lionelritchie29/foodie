import html from "./template.html";
import scss from "./style.scss";
import templateFactory from "../../utils/templateFactory.js";

const template = templateFactory(html, scss);

class ShowcaseItem extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  set item(item) {
    this._item = item;
    this.render();
  }

  render() {
    console.log(this._item.title);
    console.log(this.shadowRoot.querySelector("div"));
    // this.shadowRoot.querySelector("h5").innerHTML = this._item.title;
  }
}

customElements.define("showcase-item", ShowcaseItem);
