class AddSkillIdToRecommendation < ActiveRecord::Migration[5.1]
  def change
    add_column :recommendations, :skill_id, :integer
  end
end
