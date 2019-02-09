class Receiver < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_one :wallet, dependent: :destroy

  after_create :create_wallet

  def create_wallet
    Wallet.create(amount: 0, receiver_id: self.id)
  end
end
