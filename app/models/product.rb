class Product < ApplicationRecord
  belongs_to :seller
  # serialize :category, Array

 def self.available
  select('p.id AS product_id, p.price, p.description, p.category, s.id AS seller_id, s.name, s.email')
  .from('products as p')
  .joins("INNER JOIN sellers AS s ON s.id = p.seller_id")
  .order('s.name')
 end

  def self.categories_index(category)
    select('p.id AS product_id, p.price, p.description, p.category')
    .from('products as p')
    .where("p.category like ?", "%" + category + "%")
  end

# select p.id AS product_id, p.price, p.description, p.category
# from products as p
#      where p.category like '%';
  
# def self.filter
#     select p.id as product_id, p.price, p.description, p.category, s.id as seller_id, s.name, s.email
#     from products p
#     join sellers s
#     on p.seller_id = s.id
# end

def self.products_find(category, seller_id)
  select('p.id as product_id, p.price, p.description, p.category, s.id, s.name, s.email')
  .from('products AS p')
  .joins('INNER JOIN sellers AS s ON s.id = p.seller_id')
  # .where("p.category like ?", "%" + category + "%" "AND" "s.id = #{seller_id}")
 .where("p.category like ? AND s.id = ?" , "%" + category + "%", "#{seller_id}")
end


end