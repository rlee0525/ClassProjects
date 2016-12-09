class RemoveUserIdFromContacts < ActiveRecord::Migration
  def change
    remove_column :contacts, :user_id
    add_column :contacts, :user_id, :integer, null: false
  end
end
