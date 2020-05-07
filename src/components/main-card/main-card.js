import html from "./template.html";
import scss from "./style.scss";
import templateFactory from "../../utils/templateFactory.js";

const template = templateFactory(html, scss);

class MainCard extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.name = this.getAttribute("name") || null;
    this.render();
  }

  render() {
    //   this.shadowRoot.querySelector("")
  }
}

customElements.define("main-card", MainCard);
