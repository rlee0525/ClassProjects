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

	const DOMNodeCollection = __webpack_require__(1);

	window.$1 = (selector) => {
	  if (typeof selector === "string") {
	    const nodes = document.querySelectorAll(selector);
	    const nodeArr = Array.from(nodes);
	    return new DOMNodeCollection(nodeArr);
	  } else if (selector instanceof HTMLElement) {
	    return new DOMNodeCollection(selector);
	  }
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);