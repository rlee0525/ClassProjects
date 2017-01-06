class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: ["Invalid Credentials"], status: 422
    end
  end

  def destroy
    @user = current_user

    if @user
      logout
    else
      render json: ["No User Detected"], status: 404
    end
  end
end
