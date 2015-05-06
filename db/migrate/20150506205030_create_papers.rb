class CreatePapers < ActiveRecord::Migration
  def change
    create_table :papers do |t|
      t.string :title
      t.integer :user_id
      t.integer :class_id
      t.integer :rating
      t.integer :review_count
      t.boolean :reviewed
      t.timestamps
    end
  end
end
