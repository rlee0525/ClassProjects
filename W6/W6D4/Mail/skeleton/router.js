class Router {
  constructor(node, routes) {
    this.node = node;
    this.routes = routes;
  }

  start() {
    this.render();
    window.addEventListener("hashchange", () => {
      this.render();
    });
  }

  render() {
    this.node.innerHTML = "";
    // let currentRoute = this.activeRoute();
    let component = this.activeRoute();

    if (component === undefined) {
      this.node.innerHTML = "";
    } else {
      this.node.innerHTML = "";
      component.render();
      this.node.appendChild(component);
    }
  }

  activeRoute() {
    let locationName = window.location.hash.slice(1);
    let component = this.routes[locationName];
    return component;
  }
}

module.exports = Router;
