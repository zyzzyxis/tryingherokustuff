class Api::ProductsController < ApplicationController
  def index
    render json: Product.available
  end

  def categories_index
    render json: Product.categories_index
  end

  def category
    category = params[:category]
    render json: Product.categories_index(category)
  end

end
