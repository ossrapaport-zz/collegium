class User < ActiveRecord::Base

  has_many :papers
  has_many :comments
  has_secure_password

end