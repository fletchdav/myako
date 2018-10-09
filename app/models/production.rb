class Production < ApplicationRecord
  belongs_to :label
  has_many :tracks
  mount_uploader :photo, PhotoUploader
end
