class CreateProductions < ActiveRecord::Migration[5.1]
  def change
    create_table :productions do |t|
      t.string :title
      t.string :text
      t.string :player
      t.string :video

      t.timestamps
    end
  end
end
