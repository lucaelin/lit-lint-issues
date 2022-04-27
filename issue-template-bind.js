import {html, render} from "https://unpkg.com/lit?module";

class MyElement extends HTMLElement {
  logThis() {
    console.log(this);
    if (!(this instanceof MyElement)) {
      alert("this not instanceof MyElement");
    }
  }
  indirectLogThis() {
    this.querySelector("some-element").logThis();
  }
  connectedCallback() {
    render(html`
      <button @click=${this.logThis}>@click=logThis</button>
      <button @click=${this.logThis.bind(this)}>@click=logThis.bind</button>
      <button @click=${()=>this.logThis()}>@click=()=>logThis()</button>
      <some-element .logThis=${this.logThis}></some-element>
      <button @click=${this.indirectLogThis.bind(this)}>.logThis=logThis</button>
    `, this);
  }
}

customElements.define("my-element", MyElement);