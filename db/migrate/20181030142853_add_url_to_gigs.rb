class AddUrlToGigs < ActiveRecord::Migration[5.1]
  def change
    add_column :gigs, :url, :string
  end
end
