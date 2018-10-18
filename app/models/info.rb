class Info < ApplicationRecord
  belongs_to :categorydinfo
  validates :detail, presence: true
end
