json.extract! user, :id, :username

user_skills = user.skills

json.skills do
  json.array! user_skills do |skill|
    json.extract! skill, :id, :name
    json.endorsements skill.endorsements.count
    json.current_user_endorsed !!skill.endorsements.find_by(author_id: current_user.id)
    json.user skill.user
  end
end
