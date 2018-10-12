class AddTextToPodcasts < ActiveRecord::Migration[5.1]
  def change
    add_column :podcasts, :text, :text
  end
end
