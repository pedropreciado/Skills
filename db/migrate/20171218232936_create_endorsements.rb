class CreateEndorsements < ActiveRecord::Migration[5.1]
  def change
    create_table :endorsements do |t|
      t.integer :skill_id
      t.integer :author_id
      t.integer :receiver_id

      t.timestamps
    end
    
    add_index :endorsements, :skill_id
    add_index :endorsements, :author_id
  end
end
