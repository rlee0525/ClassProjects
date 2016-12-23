let Router = require('./router.js');

document.addEventListener("DOMContentLoaded", () => {
  let contentNode = document.querySelector('.content');
  let newRouter = new Router(contentNode);
  newRouter.start();

  let sidebarNav = Array.from(document.querySelectorAll('.sidebar-nav li'));

  sidebarNav.forEach(nav => {
    nav.addEventListener("click", () => {
      let name = nav.innerText.toLowerCase();
      location.hash = name;
    });
  });
});
