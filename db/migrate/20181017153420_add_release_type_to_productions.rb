class AddReleaseTypeToProductions < ActiveRecord::Migration[5.1]
  def change
    add_column :productions, :release_type, :string
  end
end
