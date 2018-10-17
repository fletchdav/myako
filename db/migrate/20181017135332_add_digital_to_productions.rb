class AddDigitalToProductions < ActiveRecord::Migration[5.1]
  def change
    add_column :productions, :digital, :integer
  end
end
