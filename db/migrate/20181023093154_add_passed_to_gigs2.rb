class AddPassedToGigs2 < ActiveRecord::Migration[5.1]
  def change
    add_column :gigs, :passed, :boolean
  end
end
