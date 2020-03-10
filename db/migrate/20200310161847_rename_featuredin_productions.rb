class RenameFeaturedinProductions < ActiveRecord::Migration[5.1]
  def change
    rename_column :videos, :featured, :introduction
  end
end
