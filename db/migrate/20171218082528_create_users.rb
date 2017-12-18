class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :session_token
      t.string :avatar_url

      t.timestamps
    end
    
    add_index :users, :username, unique: true
    add_index :users, :session_token
  end
end
