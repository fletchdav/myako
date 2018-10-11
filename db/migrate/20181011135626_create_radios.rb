class CreateRadios < ActiveRecord::Migration[5.1]
  def change
    create_table :radios do |t|
      t.string :title
      t.string :url

      t.timestamps
    end
  end
end
