class RemovePassedFromInfo < ActiveRecord::Migration[5.1]
  def change
    remove_column :infos, :passed
  end
end
