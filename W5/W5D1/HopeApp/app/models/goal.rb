class Goal < ActiveRecord::Base
  validates :title, presence: true

  belongs_to :user

  include Commentable
end
