class AddUrlToTracks < ActiveRecord::Migration[5.1]
  def change
    add_column :tracks, :url, :string
  end
end
