require_relative "../rails_helper.rb"

describe UsersController do 

  it {should route(:get, "/users/1").to(action: :show, id: 1) }
  it {should route(:post, "/users").to(action: :create) }
  it {should route(:put, "/users/1").to(action: :update, id: 1) }
  it {should route(:put, "/users/1/become_reviewer").to(action: :become_reviewer, id: 1) }
  it {should route(:get, "/users/1/papers").to(action: :get_papers, id: 1) }

end