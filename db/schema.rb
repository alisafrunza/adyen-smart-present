ActiveRecord::Schema.define(version: 2019_02_09_122518) do

  create_table "receivers", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_receivers_on_email", unique: true
    t.index ["reset_password_token"], name: "index_receivers_on_reset_password_token", unique: true
  end

  create_table "wallets", force: :cascade do |t|
    t.decimal "amount"
    t.integer "receiver_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["receiver_id"], name: "index_wallets_on_receiver_id"
  end

end
