import React, {useState, useEffect} from 'react'
import { Dropdown } from 'semantic-ui-react'

const FindProducts = () => {
  
  const [categories, setCategories] = useState([
    // {key: 'All', text: 'All Products', value: 'All'},
    {key: 'Accessories', text: 'Accessories', value: 'Accessories'},
    {key:'Apparel', text: 'Apparel', value: 'Apparel'},
    {key: 'Home', text: 'Home', value: 'Home'},
    {key:'Living', text: 'Living', value: 'Living'},
    {key:'Wedding', text: 'Wedding', value: 'Wedding'},
    {key:'Entertainment', text: 'Entertainment', value: 'Entertainment'},
    {key:'Collectibles', text: 'Collectibles', value: 'Collectibles'},
    {key: 'Crafts', text: 'Crafts', value: 'Crafts'},
    {key:'Toys', text: 'Toys', value: 'Toys'}
  ])






  return (
    <>
      <div>
        <h1>Find Products</h1>
      </div>
      <div>
        <Dropdown
          // onChange={handleCategoryChange}
          placeholder='Select a Category'
          fluid
          selection
          options={categories}
        />
        {/* {products && renderProducts()} */}
        {/* {!products && <p>No Products available</p>} */}
      </div>
      <div>
        <Dropdown
          // onChange={handleSellerChange}
          placeholder='Select a Seller'
          fluid
          selection
          // options={categories}
        />
        {/* {products && renderProducts()} */}
        {/* {!products && <p>No Products available</p>} */}
      </div>
    </>
  )
}

export default FindProducts
