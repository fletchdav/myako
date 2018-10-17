class ChangeVinylAndDigitalInProductions < ActiveRecord::Migration[5.1]
  def change
    change_column :productions, :vinyl, :string
  end
end
