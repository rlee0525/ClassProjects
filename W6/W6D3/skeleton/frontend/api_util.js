
const FollowToggle = require('./follow_toggle');

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
