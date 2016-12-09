class ContactShare < ActiveRecord::Base
  validates :contact_id, uniqueness: { scope: :user_id }

  belongs_to :user
  belongs_to :contact
end
