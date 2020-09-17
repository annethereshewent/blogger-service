Rails.application.routes.draw do
  use_doorkeeper
  # devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do

      namespace :auth do
        post '/register' => 'auth#register'
      end
      namespace :users do

      end

      namespace :account do

      end
    end
  end

end
