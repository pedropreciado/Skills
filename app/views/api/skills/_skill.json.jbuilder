json.extract! skill, :id, :name

json.user do
  json.extract! skill.user, :id, :username
end

json.endorsements skill.endorsements.count

json.endorsers skill.endorsers.map { |e| {username: e.username, id: e.id}}


json.current_user_endorsed !!skill.endorsements.find_by(author_id: current_user.id)
