class CreatePapersTags < ActiveRecord::Migration
  def change
    create_join_table :papers, :tags do |t|
      t.index :paper_id
      t.index :tag_id
    end
  end
end
