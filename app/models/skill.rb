# == Schema Information
#
# Table name: skills
#
#  id         :integer          not null, primary key
#  name       :string
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Skill < ApplicationRecord
  validates :name, presence: true

  has_many :endorsements,
    primary_key: :id,
    foreign_key: :skill_id,
    class_name: :Endorsement

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :recommendation,
    primary_key: :id,
    foreign_key: :skill_id,
    class_name: :Recommendation,
    optional: :true
end
