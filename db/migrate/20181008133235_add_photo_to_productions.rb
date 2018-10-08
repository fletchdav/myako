class AddPhotoToProductions < ActiveRecord::Migration[5.1]
  def change
    add_column :productions, :photo, :string
  end
end
