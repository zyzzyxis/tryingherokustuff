import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Dropdown, Form, Select } from 'semantic-ui-react'
// form at top to pick category, then filters by the category you want

const Categories = () => {
  const [categories, setCategories] = useState([
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

  useEffect(()=>{
    getProducts()
    },[])

  const getProducts = async () => {
    let res = await axios.get('/api/products')
    setProducts(res.data)
  }

 

  // const normalizeCategoryData = (categoryArr) => {
  //   return categoryArr.map( c=>{
  //     return { key: c, text: c, value: c.category }}
  //     )
  //   }

  // const handleChange =  async (e, {value}) => {
  //   try{
  //     let res =  await axios.get(`/api/categories/${value}`)


  //   }catch(err){
  //     alert(err)
  //   }
  // }

  
  
  return (
    <div>
      <h1>Categories</h1>
      <Dropdown
        placeholder='Select a Category'
        fluid
        selection
        options={categories}
      />
    </div>
    
  )
}

export default Categories
