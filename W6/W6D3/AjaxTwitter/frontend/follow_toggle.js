const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");

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
      this.$el.html("Unfollowing...!");
    }
  }

  handleClick(event) {
    event.preventDefault();
    const followToggle = this;

    if (followToggle.followState === "unfollowed") {
      followToggle.followState = "following";
      followToggle.render();
      APIUtil.followUser(this.userId).then(() => {
        followToggle.followState = "followed";
        followToggle.render();
      });
    } else {
      followToggle.followState = "unfollowing";
      followToggle.render();
      APIUtil.unfollowUser(this.userId).then(() => {
        followToggle.followState = "unfollowed";
        followToggle.render();
      });
    }
  }
}

module.exports = FollowToggle;
