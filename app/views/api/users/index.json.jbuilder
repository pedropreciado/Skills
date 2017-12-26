@users.sample(10).each do |user|
  json.set! user.id do
    json.partial! "user", user: user
  end
end
