class Wishlist < ApplicationRecord
  has_many :items, dependent: :destroy
  has_many :payments
end
