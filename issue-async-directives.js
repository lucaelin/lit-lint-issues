import {html, render} from "https://unpkg.com/lit?module";
import {asyncReplace} from "https://unpkg.com/lit/directives/async-replace.js?module";

class MyElement extends HTMLElement {
  async *generator() {
    let x = 10;
    while (x >= 0) {
      await new Promise((resolve)=>setTimeout(resolve, 1000));
      yield x--;
    }
  }
  connectedCallback() {
    render(html`
      <input disabled .value=${asyncReplace(this.generator())} />
    `, this);
  }
}

customElements.define("my-element", MyElement);