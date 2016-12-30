const APIUtil = require('./api_util.js');

class TweetCompose {
  constructor(el) {
    this.$el = $(el);
    this.$input = this.$el.find("textarea[name=tweet\\[content\\]]");

    this.$el.on("submit", this.submit.bind(this));
  }

  submit(event) {
    event.preventDefault();

    const data = this.$el.serializeJSON();
    this.$el.find(":input").prop("disabled", true);

    APIUtil.createTweet(data)
      .then(tweet => this.handleSuccess(tweet));
  }

  clearInput() {
    this.$input.val("");
  }

  handleSuccess(data) {
    const $tweetsUl = $(this.$el.data('tweets-ul'));
    this.clearInput();
    this.$el.find(":input").prop("disabled", false);
  }
}

module.exports = TweetCompose;
