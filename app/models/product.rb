class Product < ApplicationRecord
  belongs_to :seller
  serialize :category, Array
end
