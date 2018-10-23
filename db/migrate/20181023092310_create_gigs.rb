class CreateGigs < ActiveRecord::Migration[5.1]
  def change
    create_table :gigs do |t|
      t.string :details
      t.string :date

      t.timestamps
    end
  end
end
