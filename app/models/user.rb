class User < ActiveRecord::Base

  has_many :papers
  has_many :comments
  has_secure_password

  validates :email, presence: true, uniqueness: true, email: true
  validates :first_name, presence: true, length: { minimum: 2 }, name: true
  validates :last_name, presence: true, length: { minimum: 2 }, name: true
  validates :school_name, presence: true, length: { minimum: 2 }, name: true
  validates :school_address, presence: true, length: { minimum: 2 }
  validates :school_state, presence: true, length: { in: 2..15 }
  validates :school_zipcode, presence: true, length: { in: 5..10 }
  validates :reviewer, inclusion: { in: [true, false] }

end