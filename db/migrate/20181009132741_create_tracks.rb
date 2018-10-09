class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.text :title
      t.integer :position
      t.integer :min
      t.integer :sec
      t.references :production, foreign_key: true

      t.timestamps
    end
  end
end
