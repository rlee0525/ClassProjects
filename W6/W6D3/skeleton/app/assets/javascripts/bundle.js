/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const FollowToggle = __webpack_require__(1);
	
	$(() => {
	  const $buttons = $('.follow-toggle');
	
	  $buttons.each( function(_, button) {
	    new FollowToggle(button);
	  });
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const APIUtil = __webpack_require__(2);
	
	class FollowToggle {
	
	  constructor(el) {
	    this.$el = $(el);
	    this.userId = this.$el.data("user-id");
	    this.followState = this.$el.data("follow-state");
	    this.render();
	    this.$el.on('click', this.handleClick.bind(this));
	  }
	
	  render() {
	    if (this.followState === "followed") {
	      this.$el.prop("disabled", false);
	      this.$el.text("Unfollow!");
	    } else if (this.followState === "unfollowed") {
	      this.$el.prop("disabled", false);
	      this.$el.text("Follow!");
	    } else if ( this.followState === "following...") {
	      this.$el.text("Following...");
	      this.$el.prop("disabled", true);
	      // debugger;
	    } else if ( this.followState === "unfollowing...") {
	      this.$el.text("Unfollowing...");
	      this.$el.prop("disabled", true);
	    }
	  }
	
	  handleClick(e) {
	
	    e.preventDefault();
	
	    if (this.followState === "unfollowed") {
	      this.followState = "following...";
	      this.render();
	      APIUtil.followUser(this.userId)
	        .then(() => (
	          this.followState = "followed")
	          // this.render().bind(this);
	        )
	        .then( () => { this.render(); });
	    } else if (this.followState === "followed") {
	      this.followState = "unfollowing...";
	      this.render();
	      APIUtil.unfollowUser(this.userId)
	        .then(() => (
	          this.followState = "unfollowed")
	          // this.render();
	        )
	        .then( () => { this.render(); });
	    }
	  }
	}
	
	//
	// const toggleDropdown = () => {
	// 	$('#gear-dropdown').toggleClass('followed');
	// };
	//
	// // Add click listener to gear icon which invokes toggle function
	// $(() => $('follow-btn').on('click', toggleFollo));
	
	module.exports = FollowToggle;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	
	const FollowToggle = __webpack_require__(1);
	
	const APIUtil = {
	
	  followUser: id => (
	    $.ajax({
	      method: 'POST',
	      url: `/users/${id}/follow`,
	      dataType: 'json',
	      data: { user_id: id },
	      success: (res) => {
	      }
	    })
	  ),
	
	  unfollowUser: id => (
	    $.ajax({
	      method: 'DELETE',
	      url: `/users/${id}/follow`,
	      dataType: 'json',
	      data: { user_id: id },
	      success: (res) => {
	      }
	    })
	  ),
	
	  searchUsers: (queryVal, success) => (
	    $.ajax({
	      method: 'GET',
	      url: '/users/search',
	      dataType: 'json',
	      data: queryVal,
	      success: success
	    })
	  )
	};
	
	module.exports = APIUtil;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map