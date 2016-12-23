let Router = require('./router.js');
let Inbox = require('./inbox.js');

let routes = {
  // compose: Compose,
  inbox: Inbox
  // sent: Sent
};

document.addEventListener("DOMContentLoaded", () => {
  let contentNode = document.querySelector('.content');
  let newRouter = new Router(contentNode, routes);
  newRouter.start();

  let sidebarNav = Array.from(document.querySelectorAll('.sidebar-nav li'));

  sidebarNav.forEach(nav => {
    nav.addEventListener("click", () => {
      let name = nav.innerText.toLowerCase();
      location.hash = name;
    });
  });
});
