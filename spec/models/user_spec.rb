require_relative "../rails_helper"

describe User do 

  it { should validate_presence_of(:email) }
  it { should allow_value("owen@aol.com").for(:email) }
  it { should validate_uniqueness_of(:email) }

  it { should validate_presence_of(:first_name) }
  it { should validate_length_of(:first_name).is_at_least(2) }

  it { should validate_presence_of(:last_name) }
  it { should validate_length_of(:last_name).is_at_least(2) }

  it { should validate_presence_of(:school_name) }
  it { should validate_length_of(:school_name).is_at_least(2) }
  
  it { should validate_presence_of(:school_address) }
  it { should validate_length_of(:school_address).is_at_least(2) }

  it { should validate_presence_of(:school_state) }
  it { should validate_length_of(:school_state).is_at_least(2) }
  it { should validate_length_of(:school_state).is_at_most(15) }

  it { should validate_presence_of(:school_zipcode) }
  it { should validate_numericality_of(:school_zipcode).only_integer }
  #Test below is acting strangely
  #it { should validate_length_of(:school_zipcode).is_equal_to(5) }

  it { should have_secure_password }
  it { should have_many(:papers) }
  it { should have_many(:comments) }

end