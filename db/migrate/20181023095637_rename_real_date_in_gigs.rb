class RenameRealDateInGigs < ActiveRecord::Migration[5.1]
  def change
    rename_column :gigs, :real_date, :date
  end
end
