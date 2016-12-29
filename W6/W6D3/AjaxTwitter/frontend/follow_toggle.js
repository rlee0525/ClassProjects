class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');

    this.render();
  }

  render() {
    if (this.followState === "unfollowed") {
      this.$el.html("Follow!");
    } else {
      this.$el.html("Unfollow!");
    }
  }

  handleClick(event) {
    event.preventDefault();

    if (this.followState === "unfollowed") {
      $.ajax({
        url: `/users/${this.userId}/follow`,
        dataType: 'json',
        method: "POST"
      });
    } else {
      $.ajax({
        url: `/users/${this.userId}/follow`,
        dataType: 'json',
        method: "DELETE"
      });
    }
  }
}

module.exports = FollowToggle;
