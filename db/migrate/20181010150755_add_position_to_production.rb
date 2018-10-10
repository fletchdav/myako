class AddPositionToProduction < ActiveRecord::Migration[5.1]
  def change
    add_column :productions, :position, :integer
  end
end
