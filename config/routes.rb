Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create]
    resource :session, only: [:create, :destroy]
    resources :endorsements, only: [:index, :create, :destroy]
    resources :recommendations, only: [:index, :create]
    resources :skills, only: [:index, :show, :create, :edit, :destroy]
  end

  root "static_pages#root"
end
