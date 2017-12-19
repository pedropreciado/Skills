# == Schema Information
#
# Table name: recommendations
#
#  id          :integer          not null, primary key
#  author_id   :integer
#  receiver_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  skill_id    :integer
#

class Recommendation < ApplicationRecord
  
  belongs_to :author,
    primary_key: :id, 
    foreign_key: :author_id, 
    class_name: :User
  
  belongs_to :receiver,
    primary_key: :id, 
    foreign_key: :author_id,
    class_name: :User
  
  has_one :skill,
    primary_key: :id, 
    foreign_key: :skill_id,
    class_name: :Skill
end
