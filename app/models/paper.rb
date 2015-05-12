class Paper < ActiveRecord::Base

  mount_base64_uploader :avatar, AvatarUploader

  belongs_to :user
  has_many :comments

  after_initialize :check_review_count

  def check_review_count
    if self.review_count >= 3
      self.reviewed ||= true
    end
  end

end