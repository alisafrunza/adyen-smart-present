class CreatePayments < ActiveRecord::Migration[5.2]
  def change
    create_table :payments do |t|
      t.text :card_number
      t.text :cvc
      t.decimal :amount
      t.text :currency
      t.text :expiry_month
      t.text :expiry_year
      t.text :psp_reference
      t.text :issuer_country
      t.text :giver_reference
      t.text :giver_email
      t.text :comment
      t.text :status

      t.timestamps
    end

    add_reference :wishlists, :receiver
    add_reference :payments, :wishlist
  end
end
