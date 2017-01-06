class Response < ActiveRecord::Base
  validates :user_id, :answer_choice_id, presence: true
  validate :not_duplicate_response, :not_author_response

  belongs_to :respondent,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :answer_choice,
    class_name: :AnswerChoice,
    primary_key: :id,
    foreign_key: :answer_choice_id

  has_one :question,
    through: :answer_choice,
    source: :question

  def sibling_responses
    self
      .question
      .responses
      .where.not("responses.id = ?", self.id)
  end

  def respondent_already_answered?
    sibling_responses.exists?(user_id: self.user_id)
  end

  def not_duplicate_response
    if respondent_already_answered?
      errors[:user_id] << "You already answered this question!!!!"
    end
  end

  def not_author_response
    if self
      .answer_choice
      .question
      .poll
      .author_id == self.user_id

      errors[:user_id] << "DONT RIG THE RESULT YOU AUTHOR."
    end
  end
end
