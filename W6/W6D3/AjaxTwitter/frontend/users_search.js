const APIUtil = require('./api_util.js');
const FollowToggle = require('./follow_toggle.js');

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
