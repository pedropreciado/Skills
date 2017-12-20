class Api::EndorsementsController < ApplicationController
  def index
    @endorsements = Endorsements.all
  end

  def create
    @endorsement = Endorsement.new
    @endorsement.skill_id = params[:id]
    @endorsement.author_id = current_user.id
    @endorsement.receiver_id = params[:receiver_id]
    if @endorsement.save
      @user = User.find_by(id: params[:id])
      redner "api/user/", user: @user 
    else
      render json: @endorsement.errors_full_messages
    end
  end

  def destroy
  end
end
