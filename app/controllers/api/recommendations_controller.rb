class Api::RecommendationsController < ApplicationController
  def new
  end

  def index
    @recommendation = Recommendations.all
  end

  def show
  end

  def create
    @recommendation = Recommendation.new(recomendation_params)
    @skill = Skill.new(params[:name])
    @skill.user_id = current_user.id
    if @recommendation.save && @skill.save
      render "api/skills/"
    else
      render json: @recommendation.errors.full_messages
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end
  
  def recommendation_params
    params.require(:recommendation).permit(:name)
  end
end
