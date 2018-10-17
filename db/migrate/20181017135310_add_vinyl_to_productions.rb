class AddVinylToProductions < ActiveRecord::Migration[5.1]
  def change
    add_column :productions, :vinyl, :integer
  end
end
