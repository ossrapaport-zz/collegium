class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:current_user] = @user.id
      render json: @user
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render json: @user
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end

  def become_reviewer
    @user = User.find(params[:id])
    @user.reviewer = true
    @user.save
    render json: @user
  end

  private
  def user_params
    params.require(:user).permit(
      :email, 
      :password, 
      :password_confirmation,
      :first_name,
      :last_name,
      :school_name,
      :school_address,
      :school_state,
      :school_zipcode
    )
  end

end