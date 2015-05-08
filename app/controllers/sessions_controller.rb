class SessionsController < ApplicationController

  def create
    email = params[:email]
    password = params[:password]

    user = User.find_by(email: email)

    if user && user.authenticate(password)
      session[:current_user] = user.id
      render json: user
    else
      render json: { error: "Incorrect username or password"}, status: 401
    end
  end

  def destroy
    session[:current_user] = nil
    render nothing: true
  end

end