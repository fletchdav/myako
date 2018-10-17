class ChangeTextlInProductions < ActiveRecord::Migration[5.1]
  def change
    change_column :productions, :text, :text
  end
end
