require_relative "../rails_helper.rb"

describe PapersController do 

  it { should route(:get, "/papers").to(action: :index) }
  it { should route(:get, "/papers/1").to(action: :show, id: 1) }
  it { should route(:post, "/papers").to(action: :create) }
  it { should route(:put, "/papers/1/upvote").to(action: :upvote, id: 1) }
  it { should route(:put, "/papers/1/review").to(action: :review, id: 1) }
  it { should route(:post, "/papers/search").to(action: :search) }

end