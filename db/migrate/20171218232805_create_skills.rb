class CreateSkills < ActiveRecord::Migration[5.1]
  def change
    create_table :skills do |t|
      t.string :name
      t.integer :user_id

      t.timestamps
    end
    
    add_index :skills, :user_id
  end
end
