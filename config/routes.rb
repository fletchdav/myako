Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users
  get '/news', to: 'pages#news', as: :news
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :productions, only: [:index, :show, :edit, :update]
  resources :tracks, only: :index
  resources :radios, only: :index
  resources :podcasts, only: :index
  resources :videos, only: :index
  resources :infos, only: :index
end
