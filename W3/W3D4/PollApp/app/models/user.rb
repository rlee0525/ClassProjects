class User < ActiveRecord::Base
  validates :user_name, presence: true, uniqueness: true

  has_many :authored_polls,
    class_name: :Poll,
    primary_key: :id,
    foreign_key: :author_id

  has_many :answers,
    class_name: :Response,
    primary_key: :id,
    foreign_key: :user_id

  has_many :responses,
    through: :answers,
    source: :answer_choice
end
