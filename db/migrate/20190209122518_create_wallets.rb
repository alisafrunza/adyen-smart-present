class CreateWallets < ActiveRecord::Migration[5.2]
  def change
    create_table :wallets do |t|
      t.decimal :amount
      t.belongs_to :receiver

      t.timestamps
    end
  end
end
