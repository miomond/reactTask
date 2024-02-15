import { useState } from 'react'
import { useEffect } from 'react'
import * as React from 'react';
import Button from '@mui/material/Button';
import Products from './components/Products'
import Nav from './components/Nav'
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer'
import Title from './components/Title'
import { ImageList } from '@mui/material';
import Left from './components/Left';
import Raght from './components/Right';
import WovenImageList from './components/WovenImageList';
import Form from './components/Form';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Coins from './components/Coins'
function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>

<Nav/>
   {/* <Products  /> */}

   <Routes>
    <Route  path='/home' element={<WovenImageList/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/cv' element={<Title/>}/>
    <Route path='/coins' element={<Coins/>}/>
    <Route path='/register' element={<Form/>}/>
   </Routes>
<Footer/>
</React.Fragment>

  )
}

export default App
