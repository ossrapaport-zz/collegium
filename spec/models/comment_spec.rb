require_relative "../rails_helper.rb"

describe Comment do 

  it {should validate_presence_of(:text) }

  it {should validate_presence_of(:user_id) }
  it { should validate_numericality_of(:user_id).only_integer }

  it {should validate_presence_of(:paper_id) }
  it { should validate_numericality_of(:paper_id).only_integer }

  it { should belong_to(:paper) }
  it { should belong_to(:user) }

end