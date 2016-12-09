class Album < ActiveRecord::Base
  validates :band, :title, :year, presence: true
  validates :title, uniqueness: { scope: :band_id }
  validates :live, inclusion: { in: [true, false] }
  validates :year, numericality: { minimum: 1900, maximum: 3000 }

  belongs_to :band

  has_many :tracks, dependent: :destroy
end
