class AddLabeltoProductions < ActiveRecord::Migration[5.1]
  def change
    add_reference :productions, :label, foreign_key: true
  end
end
