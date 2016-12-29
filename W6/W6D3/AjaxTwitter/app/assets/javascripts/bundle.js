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
	const UsersSearch = __webpack_require__(3);
	
	$(function() {
	  $("button.follow-toggle").each( (idx, btn) => new FollowToggle(btn) );
	  $("nav.users-search").each( (idx, search) => new UsersSearch(search) );
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const APIUtil = __webpack_require__(2);
	
	
	class FollowToggle {
	  constructor(el, options) {
	    this.$el = $(el);
	    this.userId = this.$el.data("user-id") || options.userId;
	    this.followState = (this.$el.data("initial-follow-state") ||
	                        options.followState);
	
	    this.render();
	    this.$el.on("click", this.handleClick.bind(this));
	  }
	
	  render() {
	    if (this.followState === "unfollowed") {
	      this.$el.prop("disabled", false);
	      this.$el.html("Follow!");
	    } else if (this.followState === "followed") {
	      this.$el.prop("disabled", false);
	      this.$el.html("Unfollow!");
	    } else if (this.followState === "following") {
	      this.$el.prop("disabled", true);
	      this.$el.html("Following...");
	    } else if (this.followState === "unfollowing") {
	      this.$el.prop("disabled", true);
	      this.$el.html("Unfollowing...");
	    }
	  }
	
	  handleClick(event) {
	    const followToggle = this;
	    event.preventDefault();
	
	    if (this.followState === "unfollowed") {
	      this.followState = "following";
	      this.render();
	      APIUtil.followUser(this.userId).then(() => {
	        followToggle.followState = "followed";
	        followToggle.render();
	      });
	    } else {
	      this.followState = "unfollowing";
	      this.render();
	      APIUtil.unfollowUser(this.userId).then(() => {
	        followToggle.followState = "unfollowed";
	        followToggle.render();
	      });
	    }
	  }
	}
	
	module.exports = FollowToggle;


/***/ },
/* 2 */
/***/ function(module, exports) {

	const APIUtil = {
	  followUser: id => APIUtil.changeFollowStatus(id, 'POST'),
	
	  unfollowUser: id => APIUtil.changeFollowStatus(id, 'DELETE'),
	
	  changeFollowStatus: (id, method) => (
	    $.ajax({
	      url: `/users/${id}/follow`,
	      dataType: 'json',
	      method
	    })
	  ),
	
	  searchUsers: (query) => (
	    $.ajax({
	      url: `/users/search`,
	      method: 'GET',
	      dataType: 'json',
	      data: { query }
	    })
	  )
	};
	
	module.exports = APIUtil;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	const APIUtil = __webpack_require__(2);
	const FollowToggle = __webpack_require__(1);
	
	class UsersSearch {
	  constructor(el) {
	    this.$el = $(el);
	    this.$input = this.$el.find("input[name=username]");
	    this.$ul = this.$el.find(".users");
	
	    this.$input.on("input", this.handleInput.bind(this));
	  }
	
	  renderResults(users) {
	    this.$ul.empty();
	
	    for (var i = 0; i < users.length; i++) {
	      let user = users[i];
	      let $a = $("<a></a>");
	      $a.text(user.username);
	      $a.attr("href", `/users/${user.id}`);
	
	      let $followToggle = $("<button></button>");
	      new FollowToggle($followToggle, {
	        userId: user.id,
	        followState: user.followed ? "followed" : "unfollowed"
	      });
	
	      let $li = $("<li></li>");
	      $li.append($a);
	      $li.append($followToggle);
	
	      this.$ul.append($li);
	    }
	  }
	
	  handleInput(event) {
	    APIUtil.searchUsers(this.$input.val())
	      .then(users => this.renderResults(users));
	  }
	}
	
	module.exports = UsersSearch;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map