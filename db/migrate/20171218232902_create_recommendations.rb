class CreateRecommendations < ActiveRecord::Migration[5.1]
  def change
    create_table :recommendations do |t|
      t.integer :author_id
      t.integer :receiver_id

      t.timestamps
    end
    
    add_index :recommendations, :author_id
    add_index :recommendations, :receiver_id

  end
end
