class AddDateToProductions < ActiveRecord::Migration[5.1]
  def change
    add_column :productions, :date, :string
  end
end
