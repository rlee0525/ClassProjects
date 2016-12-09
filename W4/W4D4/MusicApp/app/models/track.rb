class Track < ActiveRecord::Base
  validates :album, :song, :ord, :lyrics, presence: true
  validates :ord, uniqueness: { scope: :album_id }
  validates :bonus, inclusion: { in: [true, false] }

  belongs_to :album

  has_one :band, through: :album, source: :band
end
