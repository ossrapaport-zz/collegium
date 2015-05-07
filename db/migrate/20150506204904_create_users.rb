class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.string :school_name
      t.string :school_address
      t.string :school_state
      t.integer :school_zipcode
      t.boolean :reviewer, :default => false

      t.timestamps
    end
  end
end
