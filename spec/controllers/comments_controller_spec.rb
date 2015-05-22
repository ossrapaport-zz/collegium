require_relative "../rails_helper.rb"

describe CommentsController do 

  it {should route(:get, "/papers/1/comments").to(action: :index, paper_id: 1) }
  it {should route(:post, "/papers/1/comments").to(action: :create, paper_id: 1) }
  it {should route(:put, "/comments/1").to(action: :update, id: 1) }
  it {should route(:delete, "/comments/1").to(action: :destroy, id: 1)}

end