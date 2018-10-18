class CreateCategorydinfos < ActiveRecord::Migration[5.1]
  def change
    create_table :categorydinfos do |t|
      t.string :title
      t.timestamps
    end
  end
end
