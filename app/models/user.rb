# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string
#  password_digest :string
#  session_token   :string
#  avatar_url      :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  
  attr_reader :password
  
  after_initialize :ensure_session_token
  
  has_many :skills

  has_many :endorsements,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Endorsement
  
  has_many :recommended_skills, 
    through: :skills,
    source: :recomendation
    
  has_many :recomendations,
    primary_key: :id, 
    foreign_key: :author_id,
    class_name: :Recommendation
  
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
  
  def is_password?(password)
    BCrypt.Password.new(self.password_digest).is_password?(password)
  end
  
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
  
  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end
    
end
