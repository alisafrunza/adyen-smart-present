class Api::V1::PaymentsController < ApplicationController
  URL = "https://checkout-test.adyen.com/v40/payments"
  API_KEY = Rails.application.credentials.api_key

  def create
    checkout_adyen
    render json: { success: Payment.last.status }
  end

  private

  def checkout_adyen
    body = {
      "amount": {
        "currency": "EUR",
        "value": 1000
      },
      "reference": SecureRandom.uuid,
      "paymentMethod": {
        "type": "scheme",
        "number": "4111111111111111",
        "expiryMonth": "10",
        "expiryYear": "2020",
        "holderName": "John Smith",
        "cvc": "737"
      },
      "merchantAccount": Rails.application.credentials.merchant_account
    }

    payment = Payment.create(
      card_number: body[:paymentMethod][:number],
      cvc: body[:paymentMethod][:cvc],
      amount: body[:amount][:value],
      currency: body[:amount][:currency],
      expiry_month: body[:paymentMethod][:expiryMonth],
      expiry_year: body[:paymentMethod][:expiryYear],
      giver_reference: body[:reference],
      giver_email: "alisa@test.com",
      comment: "ADD COMMENT HERE!",
      status: "pending",
      wishlist_id: wishlist.id
    )

    begin
      request = RestClient.post(
        URL,
        body.to_json,
        {
          "X-API-key" => API_KEY,
          "Content-Type" => "application/json"
        }
      )
      response = JSON.parse(request.body)

      payment.update(giver_reference: response["pspReference"], status: "success")

      receiver.wallet.update(amount: payment.amount)
    rescue => error
      payment.update(status: "failed")
      error.response.body
    end
  end

  def wishlist
    @wishlist ||= Wishlist.last
  end

  def receiver
    @receiver ||= Receiver.find(wishlist.receiver_id)
  end
end
