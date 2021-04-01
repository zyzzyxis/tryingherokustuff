class Api::ProductsController < ApplicationController
  before_action :set_page

  def index
    render json: Product.page(@page).available
  end

  def categories_index
    render json: Product.categories_index
  end

  def category
    category = params[:category]
    render json: Product.categories_index(category)
  end

  private
  def set_page
    @page = params[:page] || 1
  end

end
