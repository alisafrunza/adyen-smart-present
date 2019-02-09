class Wishlist < ApplicationRecord
  has_many :items, dependent: :destroy
end
