class Api::ProductsController < ApplicationController
  def index
    render json: Product.available
  end

  def categories_index
    render json: Product.categories_index
  end

end
