import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Form, Select } from 'semantic-ui-react'
// form at top to pick category, then filters by the category you want

const Categories = () => {
  const [categories, setCategories] = useState([])

  const categoriesList = [
    'Accessories',
    'Apparel',
    'Home',
    'Living',
    'Wedding',
    'Entertainment',
    'Collectibles',
    'Crafts',
    'Toys'
  ]

  useEffect(()=>{
    getCategories()
    },[])



  const getCategories = async () =>{
    let res = await axios.get('/api/categories')
    setCategories(res.data)
    console.log("file: Categories.js ~ line 17 ~ getCategories ~ res.data", res.data)
  }

  // const normalizeCategoryData = (categoryArr) => {
  //   return categoryArr.map( c=>{
  //     return { key: c, text: c, value: c.category }
  // })

  // const handleChange =  async (e, {value}) => {
  //   try{
  //     let res =  await axios.get(`/api/categories/${value}`)


  //   }catch(err){
  //     alert(err)
  //   }
  // }

  

  // const renderCategories = () => {
   
    
  // }
  
  
  return (
    <div>
      <h1>Categories</h1>
      {/* {renderCategories()} */}
    </div>
  )
}

export default Categories
