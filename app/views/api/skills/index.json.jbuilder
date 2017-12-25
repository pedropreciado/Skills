
@skills.each do |skill|
  json.set! skill.id do
    json.partial! "skill", skill: skill
  end
end
