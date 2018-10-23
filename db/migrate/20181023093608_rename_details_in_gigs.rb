
class RenameDetailsInGigs < ActiveRecord::Migration[5.1]
  def change
    rename_column :gigs, :details, :detail
  end
end
