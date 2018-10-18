class AddPositionToCategorydinfo < ActiveRecord::Migration[5.1]
  def change
    add_column :categorydinfos, :position, :integer
  end
end
