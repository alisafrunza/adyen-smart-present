Rails.application.routes.draw do
  devise_for :receivers
  resources :wishlists

  namespace :api do
    namespace :v1 do
      resources :payments
    end
  end
end
