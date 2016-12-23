const DOMNodeCollection = require('./dom_node_collection.js');

window.$1 = (selector) => {
  if (typeof selector === "string") {
    const nodes = document.querySelectorAll(selector);
    const nodeArr = Array.from(nodes);
    return new DOMNodeCollection(nodeArr);
  } else if (selector instanceof HTMLElement) {
    return new DOMNodeCollection(selector);
  }
};
