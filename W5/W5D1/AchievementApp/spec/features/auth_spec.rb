require 'spec_helper'
require 'rails_helper'

feature "the signup process" do

  scenario "has a new user page" do
    visit new_user_url
    expect(page).to have_content("Sign Up")
  end

  feature "signing up a user" do

    scenario "shows username on the homepage after signup" do
      sign_up_as "raymond"
      expect(page).to have_content("raymond")
    end

  end

end

feature "logging in" do
  let(:user) { FactoryGirl.create(:user) }

  scenario "shows username on the homepage after login" do
    sign_in_as_Raymond
    expect(page).to have_content("Raymond")
  end

end

feature "logging out" do
  let(:user) { FactoryGirl.create(:user) }

  scenario "begins with a logged out state" do
    visit new_session_url
    expect(page).to have_content "Log In"
  end

  scenario "doesn't show username on the homepage after logout" do
    login_as("Raymond")
    click_button "Log Out"
    expect(page).to_not have_content "Raymond"
  end
end
