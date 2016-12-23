class DOMNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
  }

  html(innerhtml) {
    if (typeof innerhtml === "string") {
      this.nodes.forEach(node => {
        node.innerHTML = innerhtml;
      });
    } else {
      return this.nodes[0].innerHTML;
    }
  }

  empty() {
    this.html("");
  }

  append(child) {
    this.nodes.forEach(node => {
      node.innerHTML += child;
    });
  }

  attr(attributeName, value) {
    if (value === undefined) {
      return this.nodes[0].getAttribute(attributeName);
    } else {
      this.nodes.forEach(node => {
        node.setAttribute(attributeName, value);
      });
    }
  }

  addClass(className) {
    this.nodes.forEach(node => {
      node.classList.add(className);
    });
  }

  removeClass(className) {
    this.nodes.forEach(node => {
      node.classList.remove(className);
    });
  }

  children() {

  }

  parent() {

  }

  find() {

  }

  remove() {

  }
}

module.exports = DOMNodeCollection;
