class AddTextToRadios < ActiveRecord::Migration[5.1]
  def change
    add_column :radios, :text, :text
  end
end
