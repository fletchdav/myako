class AddCategorydinfoToInfos < ActiveRecord::Migration[5.1]
  def change
    add_reference :infos, :categorydinfo, foreign_key: true
  end
end
