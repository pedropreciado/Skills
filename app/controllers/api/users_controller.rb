class Api::UsersController < ApplicationController
  def index
    @users = User.all - [current_user]
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messsages, status: 422
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy!
  end

  def user_params
    params.require(:user).permit(:username, :password, :avatar_url)
  end

end
