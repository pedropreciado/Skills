Rails.application.routes.draw do
  namespace :api do
    get 'sessions/create'
  end

  namespace :api do
    get 'sessions/destroy'
  end

  namespace :api do
    get 'recommendations/new'
  end

  namespace :api do
    get 'recommendations/index'
  end

  namespace :api do
    get 'recommendations/show'
  end

  namespace :api do
    get 'recommendations/create'
  end

  namespace :api do
    get 'recommendations/edit'
  end

  namespace :api do
    get 'recommendations/update'
  end

  namespace :api do
    get 'recommendations/destroy'
  end

  namespace :api do
    get 'endorsements/index'
  end

  namespace :api do
    get 'endorsements/create'
  end

  namespace :api do
    get 'endorsements/destroy'
  end

  namespace :api do
    get 'session/create'
  end

  namespace :api do
    get 'session/destroy'
  end

  namespace :api do
    get 'users/index'
  end

  namespace :api do
    get 'users/show'
  end

  namespace :api do
    get 'users/create'
  end

  namespace :api do
    get 'users/destroy'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
