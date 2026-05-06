import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Apicard from './Apicard'

const Api = () => {
const [products,setproducts]=useState([])

 const getdata= async()=>{
try {
  const apires= await axios.get('https://dummyjson.com/products')
  setproducts(apires.data.products)
  
} catch (error) {
  console("error" ,error)
}
 }
useEffect(()=>{
  getdata()
} ,[])
 
  return (
    <div className='container-api'>
        {products.map((eachproducts ,i)=>{
          return(
          <div className='cardapi'>
    <Apicard key={i} product={eachproducts}/>
          </div>
          )
        })}
    </div>
  )
}

export default Api