class RemoveDateFromGigs < ActiveRecord::Migration[5.1]
  def change
    remove_column :gigs, :date
  end
end
