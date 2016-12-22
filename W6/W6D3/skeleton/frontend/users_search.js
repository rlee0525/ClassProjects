const APIUtil = require('./api_util');

class UserSearch {
  constructor(el) {
    this.$el = $(el);
    this.input = $("input");
    this.ul = $("ul");
  }

  handleInput(e) {
    e.preventDefault();

    APIUtil.searchUsers(this.input, this)
      .then();
  }
}
