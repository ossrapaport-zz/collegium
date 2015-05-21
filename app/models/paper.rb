class Paper < ActiveRecord::Base

  mount_base64_uploader :attachment, AttachmentUploader

  belongs_to :user
  has_many :comments
  has_and_belongs_to_many :tags

  after_initialize :check_review_count

  validates :title, presence: true
  validates :user_id, presence: true
  validates :attachment, presence: true
  validates :rating, presence: true
  validates :review_count, presence: true
  validates :reviewed, inclusion: { in: [true, false ] }

  def check_review_count
    if self.review_count >= 3
      self.reviewed ||= true
    end
  end

end