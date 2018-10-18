class CreateInfos < ActiveRecord::Migration[5.1]
  def change
    create_table :infos do |t|
      t.string :category
      t.text :detail
      t.string :link

      t.timestamps
    end
  end
end
