class ChangeDigitalInProductions < ActiveRecord::Migration[5.1]
  def change
    change_column :productions, :digital, :string
  end
end
