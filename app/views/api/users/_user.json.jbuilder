json.extract! user, :id, :username

user_skills = user.skills
json.skills do
  json.array! user_skills do |skill|
    json.extract! skill, :id, :name
    json.endorsements skill.endorsements.count
  end
end
