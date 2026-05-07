import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Apicard from './Apicard'

export const Api = () => {

  const[products,setproducts]=useState([])
  const getdata= async()=>{
    try {
      const apires = await axios.get('https://dummyjson.com/products')
      setproducts(apires.data.products)
      console.log(apires.data.products)
    } catch (error) {
      console.log("error" ,error)
    }
  }

  useEffect(()=>{
    getdata()
  },[])
  return (
    <div style={{display:"flex", gap:"40px", flexWrap:"wrap", margin:"20px 40px"}}>
      {/* {products?.map((eachProduct) => {
        // console.log(eachProduct)
        return(
          <Apicard key={eachProduct.id} product={eachProduct} />
        )
      })} */}
  {products && products.map((eachProduct) => (
  <Apicard key={eachProduct.id} product={eachProduct} />
))}
    </div>
  )
}
export default Api;