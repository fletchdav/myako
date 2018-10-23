class AddPassedToGigs < ActiveRecord::Migration[5.1]
  def change
    add_column :infos, :passed, :boolean
  end
end
