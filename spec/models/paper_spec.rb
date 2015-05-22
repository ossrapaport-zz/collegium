require_relative "../rails_helper.rb"

describe Paper do 

  it {should validate_presence_of(:title) }

  it {should validate_presence_of(:user_id) }
  it { should validate_numericality_of(:user_id).only_integer }

  it {should validate_presence_of(:attachment) }

  it {should validate_presence_of(:rating) }
  it { should validate_numericality_of(:rating).only_integer }

  it {should validate_presence_of(:review_count) }
  it { should validate_numericality_of(:review_count).only_integer }

  it { should belong_to(:user) }
  it {should have_many(:comments) }
  it { should have_and_belong_to_many(:tags) }

end