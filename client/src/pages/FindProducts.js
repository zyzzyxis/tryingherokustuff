import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const FindProducts = () => {
  return (
    <>
    <div>
      <h1>Available Products</h1>
    </div>

  
  <div>
    <Dropdown
      // onChange={handleChange}
      placeholder='Select a Category'
      fluid
      selection
      // options={categories}
    />
    {/* {products && renderProducts()} */}
    {/* {!products && <p>No Products available</p>} */}
  </div>
  <div>
    <Dropdown
      // onChange={handleChange}
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
