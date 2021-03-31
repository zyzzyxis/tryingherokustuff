import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Card, Dropdown, Form, Select } from 'semantic-ui-react'
// form at top to pick category, then filters by the category you want

const Categories = () => {
  const [categories, setCategories] = useState([
          {key: 'All', text: 'All Products', value: 'All'},
          {key: 'Accessories', text: 'Accessories', value: 'Accessories'},
          {key:'Apparel', text: 'Apparel', value: 'Apparel'},
          {key: 'Home', text: 'Home', value: 'Home'},
          {key:'Living', text: 'Living', value: 'Living'},
          {key:'Wedding', text: 'Wedding', value: 'Wedding'},
          {key:'Entertainment', text: 'Entertainment', value: 'Entertainment'},
          {key:'Collectibles', text: 'Collectibles', value: 'Collectibles'},
          {key: 'Crafts', text: 'Crafts', value: 'Crafts'},
          {key:'Toys', text: 'Toys', value: 'Toys'}])

  const [products, setProducts] = useState([])
  const [showCategories, setShowCategories] = useState(true)

  // useEffect(()=>{
  //   getProducts()
  //   },[])

  // const getProducts = async () => {
  //   let res = await axios.get('/api/products')
  //   setProducts(res.data)
  // }

  const handleChange =  async (e, {value}) => {
    try{
      if(value != 'All'){
      let res =  await axios.get(`/api/categories/${value}`)
      setProducts(res.data)
      setShowCategories(false)
      }
      else{
      let res = await axios.get('api/products')
      setProducts(res.data)
      setShowCategories(true)
      }
      
    }catch(err){
      alert(err)
    }
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
              <p>{showCategories && `Category: ${p.category}`}</p>
              
            </Card.Meta>
          </Card>
          </>
        ))}
      </Card.Group>
    )
  }
  
  return (
    <div>
      <h1>Categories</h1>
      <Dropdown
        onChange={handleChange}
        placeholder='Select a Category'
        fluid
        selection
        options={categories}
      />
      {products && renderProducts()}
      {!products && <p>No Products available</p>}
    </div>
    
  )
}

export default Categories
