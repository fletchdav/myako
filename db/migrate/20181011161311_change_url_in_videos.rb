class ChangeUrlInVideos < ActiveRecord::Migration[5.1]
  def change
    change_column :videos, :url, :text
  end
end
