json.extract! skill, :id, :name

json.user do
  json.extract! skill.user, :id, :username
end

json.endorsements skill.endorsements.count