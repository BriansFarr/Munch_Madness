Rails.application.routes.draw do
  resources :restaurants, only: :index
  resources :foods
  resources :users, only: :create
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  put '/restaurants/:restaurant_id/foods/:id', to: 'foods#add_restaurant'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
