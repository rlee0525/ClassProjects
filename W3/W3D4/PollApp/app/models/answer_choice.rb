class AnswerChoice < ActiveRecord::Base
  validates :body, :question_id, presence: true

  has_many :choices,
    class_name: :Response,
    primary_key: :id,
    foreign_key: :answer_choice_id

  belongs_to :question,
    class_name: :Question,
    primary_key: :id,
    foreign_key: :question_id
end
