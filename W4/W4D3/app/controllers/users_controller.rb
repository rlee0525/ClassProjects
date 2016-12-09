class UsersController < ApplicationController
  before_action :redirect_to_cats, if: :signed_in?

  def signed_in?
    !current_user.nil?
  end

  def new
    @user = User.new

    render :new
  end

  def show
    if current_user.nil?
      redirect_to new_user_url
    elsif current_user.id == params[:id].to_i
      @user = current_user
      render :show
    else
      redirect_to new_user_url
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      # log_in(@user)
      login_user!(@user)
    else
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:user_name, :password)
  end

  def redirect_to_cats
    redirect_to cats_url
  end

end
