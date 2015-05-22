class Comment < ActiveRecord::Base

  validates :text, presence: true
  validates :user_id, presence: true, numericality: { only_integer: true }
  validates :paper_id, presence: true, numericality: { only_integer: true }

  belongs_to :paper
  belongs_to :user

end