Rails.application.routes.draw do
  # get 'document/index'
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'document#index'
  patch '/', to: 'fragments#save'
  post '/', to: 'fragments#create', as: :fragments
end
