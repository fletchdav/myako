class AddPositionToLabel < ActiveRecord::Migration[5.1]
  def change
    add_column :labels, :position, :integer
  end
end
