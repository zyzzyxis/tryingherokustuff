class Api::ProductsController < ApplicationController
  before_action :set_page

  def index
    products= Product.page(@page).available
    render json: { products: products, total_pages: products.total_pages }
  end

  # def categories_index
  #   # render json: Product.categories_index
  #   products = Product.categories_index
  #   render json: { products: products, total_pages: products.total_pages }
  # end

  def categories_index
    render json: Product.categories_index
  end

  def category
    category = params[:category]
    render json: Product.categories_index(category)
  end

  def products_find
    category = params[:category]
    seller_id = params[:seller_id]
    render json: Product.products_find(category, seller_id)
    end
    
  private
  def set_page
    @page = params[:page] || 1
  end

end
