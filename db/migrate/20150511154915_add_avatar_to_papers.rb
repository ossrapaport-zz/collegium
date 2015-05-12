class AddAvatarToPapers < ActiveRecord::Migration
  def change
    add_column :papers, :avatar, :string
  end
end
