import React, { useState ,useEffect } from 'react'
import axios from 'axios'
import Prod from './Prod'
import { Grid } from '@mui/material'
function Products() {
const [products , setProducts]= useState([])
useEffect(()=>{
    axios.get('https://dummyjson.com/products').then(res=>{
        // console.log(res.data.products);
        setProducts([...res.data.products])
    })
},[])



  return (
    <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 ,lg:6 } } sx={{marginTop:'50px'}}>
        {
                products.map((item) => {
                    return <Grid item xs={3} key={item.id} > <Prod data={item} /></Grid>
                })
            }
    </Grid>
  )
}

export default Products