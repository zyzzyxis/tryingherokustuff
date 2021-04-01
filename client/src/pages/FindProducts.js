import React, {useState, useEffect} from 'react'
import { Card, Dropdown } from 'semantic-ui-react'
import axios from 'axios'

const FindProducts = () => {
  const [chosenCategory, setChosenCategory] = useState(null)
  const [products, setProducts] = useState([])

  const [sellers, setSellers] = useState([])
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

  const onCategoryChange = (e, {value}) => {
    setChosenCategory(value)
  }

  useEffect (() => {
    getSellerId()
  }, [])
  
const normalizeSellerData = (sellerArr) => {
  return sellerArr.map(seller => { 
    return {key: seller.id , text: seller.name , value: seller.id}
  })
}

const onSellerChange = async (e, {value}) => {
  try{
    let res = await axios.get(`/api/products/${chosenCategory}/${value}`)
    setProducts(res.data)
    console.log(value)
  }catch(err){
    alert(err)
  }
}


// useEffect (() => {
//   getSellerId()
// }, [])

const getSellerId =  async () => {
  let res = await axios.get(`/api/sellers`)
  let normalizedSellerData = normalizeSellerData(res.data)
  setSellers(normalizedSellerData)
  console.log(sellers)
}

const renderProducts = () => {
  return(
    <Card.Group style={{marginTop: '20px'}}>
      {products.map( p => (
        <>
        <Card style={{padding: '10px'}}>
          <Card.Header>
            <h3>{p.description}</h3>
          </Card.Header>
          <Card.Meta>
            <p>{`Price: $${p.price}`}</p>
          </Card.Meta>
        </Card>
        </>
      ))}
    </Card.Group>
  )
}

return (
  
  <>  
    {sellers.length !== 0 ? (
      <>
      <div>
        <h1>Find Products</h1>
      </div>
      <div>
        <Dropdown
          onChange={onCategoryChange}
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
          onChange={onSellerChange}
          placeholder='Select a Seller'
          fluid
          selection
          options={sellers}
        />
        {/* {products && renderProducts()} */}
        {/* {!products && <p>No Products available</p>} */}
      </div>
      </>
    ) : (<h1>"loading"</h1>)}
    {renderProducts()}
  </>
)
}

export default FindProducts
