class AddRealDateToGigs < ActiveRecord::Migration[5.1]
  def change
    add_column :gigs, :real_date, :date
  end
end
