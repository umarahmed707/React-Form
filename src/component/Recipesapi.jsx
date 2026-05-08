import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Apicard from './Apicard'

export const Recipesapi = () => {

    const [recip,setrecips]=useState([])

    const getdata= async()=>{
        try {
            const apires = await axios.get("https://dummyjson.com/recipes")
            console.log(apires.data.recipes)
            setrecips(apires.data.recipes)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getdata()
    },[])
  return (
    <div style={{display:"flex", justifyContent:"center",alignItems:"center", gap:"20px", flexWrap:"wrap"    }}>
        {recip.map((value)=>{
            return(
<Apicard key={value.id} dishes={value}/>
            )
        })
        }</div>
  )

}
