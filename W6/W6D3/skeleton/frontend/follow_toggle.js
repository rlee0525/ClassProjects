const APIUtil = require('./api_util');

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
