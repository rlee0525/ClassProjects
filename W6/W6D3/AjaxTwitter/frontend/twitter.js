const FollowToggle = require('./follow_toggle.js');

$(function () {
  $("button.follow-toggle").each((idx, button) => new FollowToggle(button));
});
