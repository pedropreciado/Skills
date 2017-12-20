Rails.application.routes.draw do
  namespace :api do
    get 'skill/new'
  end

  namespace :api do
    get 'skill/index'
  end

  namespace :api do
    get 'skill/show'
  end

  namespace :api do
    get 'skill/create'
  end

  namespace :api do
    get 'skill/edit'
  end

  namespace :api do
    get 'skill/update'
  end

  namespace :api do
    get 'skill/destroy'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create]
    resource :session, only: [:create, :destroy]
  end
  
  root "static_pages#root"
end
