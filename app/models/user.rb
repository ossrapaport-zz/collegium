class User < ActiveRecord::Base

  has_many :papers
  has_secure_password

end