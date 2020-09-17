class AddAtachmentColumns < ActiveRecord::Migration[6.0]
  def change
    change_table :users do |t|
      t.remove :banner_image_url, :profile_image_url
    end
    add_attachment :users, :banner
    add_attachment :users, :avatar
  end
end
