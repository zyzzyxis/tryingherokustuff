import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {List, Table, Header, Card} from 'semantic-ui-react'

const Products = () => {
  const [products, setProducts] = useState([])
  const [sellers, setSellers] = useState([])



  
  const getProducts = async () => {
    let res = await axios.get('/api/products')
    createSellerArray(res.data)
  }

  const createSellerArray = (data) =>{
    let ids = [...new Set(data.map( d => d.seller_id ))];
    let sellerArray = []
    ids.map( id => {
      let products = data.filter( d => d.seller_id === id );
      let { seller_id, name, email } = products[0];
      let sellerProducts = products.map( p => { 
        let { description, price, category, id } = p;
        return { description, price, category, id };
      });

      let detail = { seller_id, name, email, products: sellerProducts, };

      sellerArray.push(detail);
    });
    setSellers(sellerArray)
  }

  useEffect(()=>{
    getProducts()
  },[])

  const renderProducts = (products) => {
    return products.map( p => 
        <Table.Row key= {p.id} >
          <Table.Cell>${p.price}</Table.Cell>
          <Table.Cell>{p.category}</Table.Cell>
          <Table.Cell>{p.description}</Table.Cell>
        </Table.Row>
    )
  }


  const renderSellers = () =>{
    console.log('renderSellers called')
    console.log(sellers)
      return (
        <List>
          { sellers.map( seller => {
              let { seller_id, name, email, products } = seller;
              return (
                <List.Item key={seller_id}>
                  <List.Header>{name} - {email}</List.Header>
                  <List.Item>
                    <Table celled>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Price</Table.HeaderCell>
                          <Table.HeaderCell>Category</Table.HeaderCell>
                          <Table.HeaderCell>Description</Table.HeaderCell>
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
