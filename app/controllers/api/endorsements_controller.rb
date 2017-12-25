class Api::EndorsementsController < ApplicationController
  def index
    @endorsements = Endorsements.all
  end

  def create
    @endorsement = Endorsement.new(endorsement_params)
    @endorsement.author_id = current_user.id
    if @endorsement.save
      @skill = Skill.find_by(id: @endorsement.skill_id)
      render "api/skills/show", skill: @skill
    else
      render json: @endorsement.errors.full_messages
    end
  end

  def destroy
    p "///////////////////////////kkksadfdsfadf......................."
    p params
    @endorsement = Endorsement.find_by(skill_id: params[:id])

    @skill = Skill.find_by(id: @endorsement.skill_id)
    if @endorsement.destroy!
      render "api/skills/show", skill: @skill
    else
      render json: @endorsement.errors.full_messages
    end
  end

  def endorsement_params
    params.require(:endorsement).permit(:skill_id, :receiver_id)
  end

end
