class AddWishlistIdToItem < ActiveRecord::Migration[5.2]
  def change
    add_reference :items, :wishlist
  end
end
