class Production < ApplicationRecord
  belongs_to :label
  mount_uploader :photo, PhotoUploader
end
