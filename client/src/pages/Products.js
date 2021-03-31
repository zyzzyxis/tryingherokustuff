import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {List, Table} from 'semantic-ui-react'

const Products = () => {

  // const [products, setProducts] = useState([]) //not used, replaced w/ sellers array for data restructure
  
  const [sellers, setSellers] = useState([])
  
  //get seller/product data via api
  const getProducts = async () => {
    let res = await axios.get('/api/products')
    createSellerArray(res.data)
  }

  //restructure data from axios for seller product tables in page
  const createSellerArray = (data) =>{
    let ids = [...new Set(data.map( d => d.seller_id ))];
    //set temp seller array to push to, then set non-temp seller array to match
    let sellerArray = []
    ids.map( id => {
      let products = data.filter( d => d.seller_id === id );
      let { seller_id, name, email } = products[0];

      let sellerProducts = products.map( p => { 
        let { description, price, category, product_id } = p;
        return { description, price, category, product_id };
      });

      let detail = { seller_id, name, email, products: sellerProducts, };

      sellerArray.push(detail);
    });
    
    setSellers(sellerArray)
  }

  useEffect(()=>{
    getProducts()
  },[])

  //Called in renderSellers to insert each product row
  const renderProducts = (products) => {
    // console.log(products)
    return products.map( p => 
        <Table.Row key= {p.product_id} >
          <Table.Cell>{p.description}</Table.Cell>
          <Table.Cell>{p.category}</Table.Cell>
          <Table.Cell>${p.price}</Table.Cell>
        </Table.Row>
    )
  }

  //map through sellers array, create table for each seller
  const renderSellers = () =>{
    // console.log('renderSellers called')
    // console.log(sellers)
      return (
        <List>
          { sellers.map( seller => {
              let { seller_id, name, email, products } = seller;
              return (
                <List.Item key={seller_id}>
                  <List.Header><h2>{name} - {email}</h2></List.Header>
                  <List.Item>
                    <Table celled>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Description</Table.HeaderCell>
                          <Table.HeaderCell>Category</Table.HeaderCell>
                          <Table.HeaderCell>Price</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        {renderProducts(products)}
                      </Table.Body>
                    </Table>
                  </List.Item>
                </List.Item>
              )
            })
          }
        </List>
      )
    }
  

  
  
  return (
    <>
    <div>
      {renderSellers()}
    </div>
    </>
  )
}

export default Products
