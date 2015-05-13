class RemoveAvatarFromPapers < ActiveRecord::Migration
  def change
    remove_column :papers, :avatar, :string
  end
end
