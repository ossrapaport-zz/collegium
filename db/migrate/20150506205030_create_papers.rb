class CreatePapers < ActiveRecord::Migration
  def change
    create_table :papers do |t|
      t.string :title
      t.integer :user_id
      t.string :attachment
      #t.integer :course_id
      t.integer :rating, :default => 0 
      t.integer :review_count, :default => 0
      t.boolean :reviewed, :default => false
      t.timestamps
    end
  end
end
