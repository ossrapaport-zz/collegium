Rails.application.routes.draw do

  root "users#index"
  resources :users, only: [:show, :create, :update]
  put "users/:id/become_reviewer", :to => "users#become_reviewer"
  get "users/:id/papers", :to => "users#get_papers"
  resources :papers, only: [:index, :show, :create, :destroy] do
    resources :comments, only: [:index, :create]
  end
  put "papers/:id/upvote", :to => "papers#upvote"
  put "papers/:id/review", :to => "papers#review"
  post "papers/search", :to => "papers#search"
  resources :comments, only: [:update, :destroy]
  resources :tags, only: [:index, :create]
  post "/sessions", :to => "sessions#create"
  delete "/sessions", :to => "sessions#destroy"

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
