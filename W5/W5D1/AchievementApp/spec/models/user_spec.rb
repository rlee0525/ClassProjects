require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { User.new(username: "Raymond", password: "Password") }
  describe User do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_length_of(:password).is_at_least(6) }
  end

  it "creates a password_digest when valid password is given" do
    expect(user.password_digest).to_not be_nil
  end

  it "checks the password" do
    expect(user.is_password?("Password")).to be_truthy
  end

  it "resets the session_token" do
    expect(user.session_token).to_not eq(user.reset_session_token!)
  end

  it "finds by credentials" do
    user.save
    expect(user).to eq(User.find_by_credentials("Raymond", "Password"))
  end
end
