class Paper < ActiveRecord::Base

  belongs_to :user
  has_many :comments
  mount_uploader :attachment, AttachmentUploader

  after_initialize :check_review_count

  def check_review_count
    if self.review_count >= 3
      self.reviewed ||= true
    end
  end

end