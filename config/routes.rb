Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  namespace :api do
    get 'products', to: 'products#index'
    get 'categories', to: 'products#categories_index'
    get 'categories/:category', to: 'products#category'
    get 'products/:category/:seller_id', to: 'products#products_find'

    resources :sellers 
  end
end
