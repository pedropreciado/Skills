# == Schema Information
#
# Table name: endorsements
#
#  id          :integer          not null, primary key
#  skill_id    :integer
#  author_id   :integer
#  receiver_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Endorsement < ApplicationRecord
  
  belongs_to :skill

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id, 
    class_name: :User    
  
end
