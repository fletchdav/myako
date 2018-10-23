class AddDateToInfos < ActiveRecord::Migration[5.1]
  def change
    add_column :infos, :date, :string
  end
end
