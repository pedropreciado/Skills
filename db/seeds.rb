# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

#
# 30.times do
#   skill_num = rand(30)
#   user = User.new({username: Faker::StarWars.unique.character, password: "thispassword"})
#   user.save!
#   skill_num.times do
#     skill = Skill.new({name: Faker::ProgrammingLanguage.name, user_id: user.id})
#     skill.save!
#   end
# end

#

# skill_num = 30
#
user1 = User.find_by(username: "Pedro Preciado III")
user2 = User.find_by(username: "Alison Cheng")
#
# skill_num.times do
#  skill1 = Skill.new({name: Faker::ProgrammingLanguage.unique.name, user_id: user1.id})
#  skill2 = Skill.new({name: Faker::ProgrammingLanguage.unique.name, user_id: user2.id})
#  skill1.save!
#  skill2.save!
# end


20.times do
  id1 = rand(42..117)
  # id2 = rand(42..117)
  skillID1 = 2 * (rand(1123..1145) / 2) + 1
  skillID2 = 2 * (rand(1124..1146) / 2)

  Endorsement.new({skill_id: skillID1, author_id: id1, receiver_id: user1.id }).save
  Endorsement.new({skill_id: skillID2, author_id: id1, receiver_id: user2.id }).save

end
