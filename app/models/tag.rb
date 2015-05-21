class Tag < ActiveRecord::Base

  has_and_belongs_to_many :papers

  validates :tag, presence: true, name: true

end