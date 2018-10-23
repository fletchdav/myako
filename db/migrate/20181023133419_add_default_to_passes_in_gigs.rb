class AddDefaultToPassesInGigs < ActiveRecord::Migration[5.1]
  def change
    change_column :gigs, :passed, :boolean, default: false
  end
end
