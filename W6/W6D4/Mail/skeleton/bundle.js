/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	let Router = __webpack_require__(1);
	let Inbox = __webpack_require__(2);

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


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = { render() {
	  let container = document.createElement('ul');
	  container.className = 'messages';
	  container.innerHTML = 'An Inbox Message';
	  return container;
	}};


/***/ }
/******/ ]);