class AddIntroductionToRadios < ActiveRecord::Migration[5.1]
  def change
    add_column :radios, :introduction, :boolean, default: false
  end
end
