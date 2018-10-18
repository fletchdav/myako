class RemoveCategoryFromInfos < ActiveRecord::Migration[5.1]
  def change
    remove_column :infos, :category, :string
  end
end
